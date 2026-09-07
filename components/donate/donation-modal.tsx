"use client";

import { useState, useEffect, useRef } from "react";
import Script from "next/script";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Heart, X, CheckCircle, Loader2, Lock } from "lucide-react";

declare global {
  interface Window {
    PaystackPop?: {
      setup: (options: PaystackSetupOptions) => { openIframe: () => void };
    };
  }
}

interface PaystackSetupOptions {
  key: string;
  email: string;
  amount: number;
  currency: string;
  ref: string;
  metadata: Record<string, unknown>;
  callback: (response: { reference: string }) => void;
  onClose: () => void;
}

const suggestedAmounts = [500, 1000, 2500, 5000, 10000];

const programs = [
  { value: "general", label: "Where Most Needed" },
  { value: "athlete-support", label: "Athlete Support" },
  { value: "education-support", label: "Education Support" },
  { value: "training-development", label: "Training & Development" },
  { value: "mentorship", label: "Mentorship" },
];

interface DonationModalProps {
  open: boolean;
  onClose: () => void;
  initialAmount?: number;
  initialProgram?: string;
}

export function DonationModal({
  open,
  onClose,
  initialAmount = 1000,
  initialProgram = "general",
}: DonationModalProps) {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<{ reference: string } | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const [currency, setCurrency] = useState<"KES" | "USD">("KES");
  const [frequency, setFrequency] = useState<"one-time" | "monthly">(
    "one-time",
  );
  const [amount, setAmount] = useState(initialAmount);
  const [program, setProgram] = useState(initialProgram);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [organization, setOrganization] = useState("");
  const [message, setMessage] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [wantsUpdates, setWantsUpdates] = useState(true);
  const [isAnonymous, setIsAnonymous] = useState(false);

  const canSubmit =
    amount > 0 && name.trim() && email.trim() && agreedToTerms && !submitting;

  // Sync presets whenever the modal is (re)opened from a different trigger
  useEffect(() => {
    if (open) {
      setAmount(initialAmount);
      setProgram(initialProgram);
    }
  }, [open, initialAmount, initialProgram]);

  // Lock body scroll while open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  // Escape to close, focus close button on open
  useEffect(() => {
    if (!open) return;
    closeButtonRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  const handlePay = () => {
    if (!canSubmit) return;

    const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY;
    if (!publicKey || !window.PaystackPop) {
      alert("Payment system is still loading. Please try again in a moment.");
      return;
    }

    setSubmitting(true);
    const reference = `TEF-${Date.now()}`;

    const handler = window.PaystackPop.setup({
      key: publicKey,
      email,
      amount: amount * 100, // Paystack expects the smallest currency unit
      currency,
      ref: reference,
      metadata: {
        custom_fields: [
          {
            display_name: "Full Name",
            variable_name: "full_name",
            value: name,
          },
          { display_name: "Phone", variable_name: "phone", value: phone },
          { display_name: "Program", variable_name: "program", value: program },
          {
            display_name: "Frequency",
            variable_name: "frequency",
            value: frequency,
          },
          {
            display_name: "Organization",
            variable_name: "organization",
            value: organization,
          },
          {
            display_name: "Anonymous",
            variable_name: "anonymous",
            value: isAnonymous,
          },
        ],
      },
      callback: (response) => {
        // TODO: verify server-side before treating as final —
        // e.g. await fetch(`/api/donations/verify/${response.reference}`)
        setSubmitting(false);
        setSuccess({ reference: response.reference });
      },
      onClose: () => {
        setSubmitting(false);
      },
    });

    handler.openIframe();
  };

  const resetAndClose = () => {
    setSuccess(null);
    setName("");
    setEmail("");
    setPhone("");
    setOrganization("");
    setMessage("");
    setAgreedToTerms(false);
    setIsAnonymous(false);
    onClose();
  };

  if (!open) return null;

  return (
    <>
      <Script
        src="https://js.paystack.co/v1/inline.js"
        strategy="afterInteractive"
        onLoad={() => setScriptLoaded(true)}
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Make a donation"
        className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-950/75 backdrop-blur-sm p-4"
        onClick={resetAndClose}
      >
        <div
          className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-background rounded-3xl shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            ref={closeButtonRef}
            onClick={resetAndClose}
            aria-label="Close donation form"
            className="absolute top-5 right-5 w-9 h-9 rounded-full bg-muted flex items-center justify-center hover:bg-muted/70 transition-colors z-10"
          >
            <X className="h-4.5 w-4.5" />
          </button>

          {success ? (
            /* Success State */
            <div className="p-8 md:p-10 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-3">
                Thank You for Your Support
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed max-w-md mx-auto mb-6">
                Your donation of{" "}
                <span className="font-semibold text-foreground">
                  {currency} {amount.toLocaleString()}
                </span>{" "}
                has been received. A confirmation has been sent to{" "}
                <span className="font-semibold text-foreground">{email}</span>.
              </p>
              <p className="text-xs text-muted-foreground mb-6">
                Reference: {success.reference}
              </p>
              <Button
                onClick={resetAndClose}
                className="rounded-full px-8 bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Done
              </Button>
            </div>
          ) : (
            <>
              {/* Header */}
              <div className="border-b border-border/60 px-6 md:px-10 pt-10 pb-6 text-center">
                <div className="flex items-center justify-center mx-auto mb-4">
                  <img src="/images/logo.png" alt="" className="h-10" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Support Our Mission
                </h2>
                <p className="text-muted-foreground text-sm">
                  {frequency === "one-time" ? "One-time" : "Monthly"} donation
                  by M-Pesa or card.
                </p>

                <div className="inline-flex items-center gap-1 mt-5 p-1 rounded-full bg-muted">
                  <button
                    type="button"
                    onClick={() => setFrequency("one-time")}
                    className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                      frequency === "one-time"
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground"
                    }`}
                  >
                    One-time
                  </button>
                  <button
                    type="button"
                    onClick={() => setFrequency("monthly")}
                    className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                      frequency === "monthly"
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground"
                    }`}
                  >
                    Monthly
                  </button>
                </div>
              </div>

              <div className="p-6 md:p-10">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_350px] gap-5 mb-8">
                  {/* Amount picker */}
                  <div className="min-w-0 rounded-2xl border border-border/60 p-5">
                    <div className="flex items-center justify-between mb-4 gap-3">
                      <Label className="text-sm">
                        Choose amount ({currency})
                      </Label>
                      <div className="inline-flex items-center rounded-full bg-muted p-0.5 shrink-0">
                        {(["KES", "USD"] as const).map((c) => (
                          <button
                            key={c}
                            type="button"
                            onClick={() => setCurrency(c)}
                            className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                              currency === c
                                ? "bg-primary text-primary-foreground"
                                : "text-muted-foreground"
                            }`}
                          >
                            {c}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2 mb-4">
                      {suggestedAmounts.map((amt) => (
                        <button
                          key={amt}
                          type="button"
                          onClick={() => setAmount(amt)}
                          className={`rounded-xl border py-3 text-xs sm:text-sm font-semibold transition-all ${
                            amount === amt
                              ? "border-primary bg-primary text-primary-foreground"
                              : "border-border hover:border-primary/40"
                          }`}
                        >
                          {currency} {amt.toLocaleString()}
                        </button>
                      ))}
                    </div>

                    <div className="mb-4">
                      <Label
                        htmlFor="custom-amount"
                        className="text-xs mb-2 block"
                      >
                        Custom amount ({currency})
                      </Label>
                      <Input
                        id="custom-amount"
                        type="number"
                        min={1}
                        value={amount || ""}
                        onChange={(e) =>
                          setAmount(parseInt(e.target.value) || 0)
                        }
                        placeholder="Enter amount"
                        className="h-11 rounded-xl"
                      />
                    </div>

                    <div>
                      <Label className="text-xs mb-2 block">Donate to</Label>
                      <Select value={program} onValueChange={setProgram}>
                        <SelectTrigger className="h-11 rounded-xl w-full">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {programs.map((p) => (
                            <SelectItem key={p.value} value={p.value}>
                              {p.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="mt-4 rounded-xl bg-muted/50 p-4 text-xs text-muted-foreground leading-relaxed">
                      <p className="font-semibold text-foreground mb-1">
                        What happens next
                      </p>
                      You&apos;ll be redirected to secure Paystack checkout to
                      complete your donation using M-Pesa or card.
                    </div>
                  </div>

                  {/* Summary */}
                  <div className="min-w-0 rounded-2xl border border-border/60 bg-muted/30 p-5 flex flex-col">
                    <p className="text-xs text-muted-foreground mb-1">
                      Donation summary
                    </p>
                    <p className="text-2xl font-bold text-foreground mb-3 break-words">
                      {currency} {amount.toLocaleString()}
                    </p>
                    <div className="text-xs text-muted-foreground space-y-1 mb-4">
                      <p>
                        Type:{" "}
                        <span className="text-foreground font-medium">
                          {frequency === "one-time" ? "One-time" : "Monthly"}{" "}
                          donation
                        </span>
                      </p>
                      <p>
                        Program:{" "}
                        <span className="text-foreground font-medium">
                          {programs.find((p) => p.value === program)?.label}
                        </span>
                      </p>
                    </div>
                    <div className="mb-4">
                      <Image
                        src="/images/paystack-badge-ke.png"
                        alt="Secured by Paystack — Mastercard, Visa, M-Pesa, Amex accepted"
                        width={200}
                        height={40}
                        className="h-auto w-full max-w-[280px]"
                      />
                    </div>
                    <p className="text-xs text-muted-foreground mt-auto">
                      Instant receipt after successful donation
                    </p>
                  </div>
                </div>

                {/* Donor Info */}
                <div className="mb-6">
                  <h3 className="text-sm font-bold text-foreground mb-4">
                    Donor information
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <Label
                        htmlFor="donor-name"
                        className="text-xs mb-2 block"
                      >
                        Full name *
                      </Label>
                      <Input
                        id="donor-name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Your name"
                        className="h-11 rounded-xl"
                        required
                      />
                    </div>
                    <div>
                      <Label
                        htmlFor="donor-email"
                        className="text-xs mb-2 block"
                      >
                        Email *
                      </Label>
                      <Input
                        id="donor-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        className="h-11 rounded-xl"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div>
                      <Label
                        htmlFor="donor-phone"
                        className="text-xs mb-2 block"
                      >
                        Phone
                      </Label>
                      <Input
                        id="donor-phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. +2547..."
                        className="h-11 rounded-xl"
                      />
                    </div>
                    <div>
                      <Label htmlFor="donor-org" className="text-xs mb-2 block">
                        Organization (optional)
                      </Label>
                      <Input
                        id="donor-org"
                        value={organization}
                        onChange={(e) => setOrganization(e.target.value)}
                        className="h-11 rounded-xl"
                      />
                    </div>
                  </div>
                  <div>
                    <Label
                      htmlFor="donor-message"
                      className="text-xs mb-2 block"
                    >
                      Message (optional)
                    </Label>
                    <Textarea
                      id="donor-message"
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="rounded-xl"
                    />
                  </div>
                </div>

                {/* Checkboxes */}
                <div className="flex flex-col gap-3 mb-6">
                  <label className="flex items-center gap-3 text-sm cursor-pointer">
                    <Checkbox
                      checked={agreedToTerms}
                      onCheckedChange={(c) => setAgreedToTerms(c as boolean)}
                    />
                    I agree to the privacy notice and donation terms. *
                  </label>
                  <label className="flex items-center gap-3 text-sm cursor-pointer">
                    <Checkbox
                      checked={wantsUpdates}
                      onCheckedChange={(c) => setWantsUpdates(c as boolean)}
                    />
                    I want impact updates by email.
                  </label>
                  <label className="flex items-center gap-3 text-sm cursor-pointer">
                    <Checkbox
                      checked={isAnonymous}
                      onCheckedChange={(c) => setIsAnonymous(c as boolean)}
                    />
                    Display my donation as anonymous.
                  </label>
                </div>

                <Button
                  size="lg"
                  disabled={!canSubmit || !scriptLoaded}
                  onClick={handlePay}
                  className="w-full h-12 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    `Continue to donate (${currency} ${amount.toLocaleString()})`
                  )}
                </Button>

                <p className="flex items-center justify-center gap-2 text-xs text-muted-foreground mt-4">
                  <Lock className="h-3.5 w-3.5" />
                  Secure checkout powered by Paystack. We never store your card
                  data.
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
