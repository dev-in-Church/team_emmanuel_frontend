"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
  CreditCard,
  Smartphone,
  Heart,
  CheckCircle,
  Loader2,
  ShieldCheck,
} from "lucide-react";

const suggestedAmounts = [500, 1000, 2500, 5000, 10000, 25000];

const programs = [
  { value: "general", label: "Where Most Needed" },
  { value: "education", label: "Education Support" },
  { value: "healthcare", label: "Healthcare Outreach" },
  { value: "community", label: "Community Development" },
  { value: "youth", label: "Youth Empowerment" },
  { value: "food", label: "Food Security" },
];

interface DonationFormProps {
  onSubmit?: (data: DonationData) => void;
}

interface DonationData {
  amount: number;
  frequency: "one-time" | "monthly";
  program: string;
  paymentMethod: "mpesa" | "card";
  name: string;
  email: string;
  phone?: string;
  cardNumber?: string;
  cardExpiry?: string;
  cardCvc?: string;
  isAnonymous: boolean;
}

export function DonationForm({ onSubmit }: DonationFormProps) {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState<DonationData>({
    amount: 1000,
    frequency: "one-time",
    program: "general",
    paymentMethod: "mpesa",
    name: "",
    email: "",
    phone: "",
    isAnonymous: false,
  });

  const handleSubmit = async () => {
    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    setLoading(false);
    setStep(3);

    onSubmit?.(formData);
  };

  return (
    <div className="w-full rounded-3xl border bg-background">
      {/* Header */}
      <div className="border-b p-8 md:p-10 text-center">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
          <Heart className="h-8 w-8 text-primary" />
        </div>

        <h2 className="text-3xl font-bold text-foreground mb-3">
          Support Our Mission
        </h2>

        <p className="text-muted-foreground max-w-lg mx-auto leading-relaxed">
          Your contribution helps us support young athletes through mentorship,
          education, sports development, and community programs.
        </p>
      </div>

      {/* Content */}
      <div className="p-8 md:p-10">
        {/* Steps */}
        <div className="flex items-center justify-center gap-4 mb-10">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center">
              <div
                className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold transition-all ${
                  step >= s
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {step > s ? <CheckCircle className="h-4 w-4" /> : s}
              </div>

              {s < 3 && (
                <div
                  className={`w-14 h-[2px] mx-2 ${
                    step > s ? "bg-primary" : "bg-border"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* STEP 1 */}
        {step === 1 && (
          <div className="space-y-8">
            {/* Frequency */}
            <div className="space-y-3">
              <Label>Donation Frequency</Label>

              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() =>
                    setFormData({
                      ...formData,
                      frequency: "one-time",
                    })
                  }
                  className={`rounded-2xl border px-4 py-4 text-sm font-medium transition-all ${
                    formData.frequency === "one-time"
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border hover:border-primary/40"
                  }`}
                >
                  One-time
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setFormData({
                      ...formData,
                      frequency: "monthly",
                    })
                  }
                  className={`rounded-2xl border px-4 py-4 text-sm font-medium transition-all ${
                    formData.frequency === "monthly"
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border hover:border-primary/40"
                  }`}
                >
                  Monthly
                </button>
              </div>
            </div>

            {/* Amounts */}
            <div className="space-y-4">
              <Label>Select Amount</Label>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {suggestedAmounts.map((amount) => (
                  <button
                    type="button"
                    key={amount}
                    onClick={() =>
                      setFormData({
                        ...formData,
                        amount,
                      })
                    }
                    className={`rounded-2xl border p-5 text-left transition-all hover:border-primary ${
                      formData.amount === amount
                        ? "border-primary bg-primary/5"
                        : "border-border"
                    }`}
                  >
                    <div className="text-lg font-bold">
                      KES {amount.toLocaleString()}
                    </div>

                    <p className="text-xs text-muted-foreground mt-1">
                      Support a program
                    </p>
                  </button>
                ))}
              </div>

              <div className="space-y-2">
                <Label htmlFor="custom-amount">Custom Amount</Label>

                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">
                    KES
                  </span>

                  <Input
                    id="custom-amount"
                    type="number"
                    value={formData.amount || ""}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        amount: parseInt(e.target.value) || 0,
                      })
                    }
                    placeholder="Enter custom amount"
                    className="pl-14 h-12 rounded-xl"
                  />
                </div>
              </div>
            </div>

            {/* Program */}
            <div className="space-y-2">
              <Label>Donate To</Label>

              <Select
                value={formData.program}
                onValueChange={(value) =>
                  setFormData({
                    ...formData,
                    program: value,
                  })
                }
              >
                <SelectTrigger className="h-12 rounded-xl">
                  <SelectValue placeholder="Select program" />
                </SelectTrigger>

                <SelectContent>
                  {programs.map((program) => (
                    <SelectItem key={program.value} value={program.value}>
                      {program.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button
              size="lg"
              className="w-full h-12 rounded-xl"
              disabled={formData.amount < 100}
              onClick={() => setStep(2)}
            >
              Continue
            </Button>
          </div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <div className="space-y-8">
            {/* User info */}
            <div className="space-y-5">
              <div>
                <h3 className="font-semibold text-lg">Your Information</h3>

                <p className="text-sm text-muted-foreground mt-1">
                  Enter your details to continue
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Full Name</Label>

                  <Input
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        name: e.target.value,
                      })
                    }
                    className="h-12 rounded-xl"
                  />
                </div>

                <div className="space-y-2">
                  <Label>Email Address</Label>

                  <Input
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        email: e.target.value,
                      })
                    }
                    className="h-12 rounded-xl"
                  />
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Checkbox
                  checked={formData.isAnonymous}
                  onCheckedChange={(checked) =>
                    setFormData({
                      ...formData,
                      isAnonymous: checked as boolean,
                    })
                  }
                />

                <Label className="font-normal cursor-pointer">
                  Make my donation anonymous
                </Label>
              </div>
            </div>

            {/* Payment method */}
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg">Payment Method</h3>

                <p className="text-sm text-muted-foreground mt-1">
                  Choose your preferred payment option
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() =>
                    setFormData({
                      ...formData,
                      paymentMethod: "mpesa",
                    })
                  }
                  className={`rounded-2xl border p-5 text-left transition-all ${
                    formData.paymentMethod === "mpesa"
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/40"
                  }`}
                >
                  <Smartphone className="h-6 w-6 mb-3 text-primary" />

                  <div className="font-semibold">M-Pesa</div>

                  <p className="text-xs text-muted-foreground mt-1">
                    Fast and secure mobile payment
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() =>
                    setFormData({
                      ...formData,
                      paymentMethod: "card",
                    })
                  }
                  className={`rounded-2xl border p-5 text-left transition-all ${
                    formData.paymentMethod === "card"
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/40"
                  }`}
                >
                  <CreditCard className="h-6 w-6 mb-3 text-primary" />

                  <div className="font-semibold">Card</div>

                  <p className="text-xs text-muted-foreground mt-1">
                    Visa, Mastercard & more
                  </p>
                </button>
              </div>

              {/* M-Pesa */}
              {formData.paymentMethod === "mpesa" && (
                <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5">
                  <div className="space-y-2">
                    <Label>M-Pesa Phone Number</Label>

                    <Input
                      type="tel"
                      placeholder="07XX XXX XXX"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          phone: e.target.value,
                        })
                      }
                      className="h-12 rounded-xl bg-background"
                    />

                    <p className="text-xs text-muted-foreground">
                      You will receive an STK Push on your phone.
                    </p>
                  </div>
                </div>
              )}

              {/* Card */}
              {formData.paymentMethod === "card" && (
                <div className="space-y-4 rounded-2xl border p-5">
                  <div className="space-y-2">
                    <Label>Card Number</Label>

                    <Input
                      placeholder="1234 5678 9012 3456"
                      value={formData.cardNumber}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          cardNumber: e.target.value,
                        })
                      }
                      className="h-12 rounded-xl"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Expiry Date</Label>

                      <Input
                        placeholder="MM/YY"
                        value={formData.cardExpiry}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            cardExpiry: e.target.value,
                          })
                        }
                        className="h-12 rounded-xl"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>CVC</Label>

                      <Input
                        placeholder="123"
                        value={formData.cardCvc}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            cardCvc: e.target.value,
                          })
                        }
                        className="h-12 rounded-xl"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Summary */}
            <div className="rounded-2xl border bg-muted/30 p-5">
              <p className="text-sm text-muted-foreground mb-2">
                Donation Summary
              </p>

              <p className="text-3xl font-bold mb-4">
                KES {formData.amount.toLocaleString()}
              </p>

              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Frequency</span>

                  <span className="font-medium capitalize">
                    {formData.frequency}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Program</span>

                  <span className="font-medium">
                    {programs.find((p) => p.value === formData.program)?.label}
                  </span>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="outline"
                className="h-12 rounded-xl flex-1"
                onClick={() => setStep(1)}
              >
                Back
              </Button>

              <Button
                className="h-12 rounded-xl flex-1"
                onClick={handleSubmit}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  `Donate KES ${formData.amount.toLocaleString()}`
                )}
              </Button>
            </div>

            {/* Trust */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground pt-2">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4" />
                Secure Payments
              </div>

              <div className="flex items-center gap-2">
                <Smartphone className="h-4 w-4" />
                M-Pesa Supported
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                Instant Confirmation
              </div>
            </div>
          </div>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <div className="text-center py-10">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-primary" />
            </div>

            <h3 className="text-3xl font-bold mb-3">
              Thank You for Your Support
            </h3>

            <p className="text-muted-foreground max-w-md mx-auto leading-relaxed mb-8">
              Your contribution helps us continue supporting young athletes
              through mentorship, education, and opportunity.
            </p>

            <div className="rounded-2xl border bg-muted/30 p-5 max-w-sm mx-auto mb-8">
              <p className="text-sm text-muted-foreground mb-2">
                Donation Amount
              </p>

              <p className="text-3xl font-bold">
                KES {formData.amount.toLocaleString()}
              </p>
            </div>

            <p className="text-sm text-muted-foreground mb-8">
              A confirmation email has been sent to{" "}
              <span className="font-medium text-foreground">
                {formData.email}
              </span>
            </p>

            <Button
              variant="outline"
              className="rounded-xl"
              onClick={() => {
                setStep(1);

                setFormData({
                  amount: 1000,
                  frequency: "one-time",
                  program: "general",
                  paymentMethod: "mpesa",
                  name: "",
                  email: "",
                  phone: "",
                  isAnonymous: false,
                });
              }}
            >
              Make Another Donation
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
