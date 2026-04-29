"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { CreditCard, Smartphone, Heart, CheckCircle, Loader2 } from "lucide-react"

const suggestedAmounts = [500, 1000, 2500, 5000, 10000, 25000]

const programs = [
  { value: "general", label: "Where Most Needed" },
  { value: "education", label: "Education Support" },
  { value: "healthcare", label: "Healthcare Outreach" },
  { value: "community", label: "Community Development" },
  { value: "youth", label: "Youth Empowerment" },
  { value: "food", label: "Food Security" },
]

interface DonationFormProps {
  onSubmit?: (data: DonationData) => void
}

interface DonationData {
  amount: number
  frequency: "one-time" | "monthly"
  program: string
  paymentMethod: "mpesa" | "card"
  name: string
  email: string
  phone?: string
  cardNumber?: string
  cardExpiry?: string
  cardCvc?: string
  isAnonymous: boolean
}

export function DonationForm({ onSubmit }: DonationFormProps) {
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState<DonationData>({
    amount: 1000,
    frequency: "one-time",
    program: "general",
    paymentMethod: "mpesa",
    name: "",
    email: "",
    phone: "",
    isAnonymous: false,
  })

  const handleAmountSelect = (amount: number) => {
    setFormData({ ...formData, amount })
  }

  const handleCustomAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 0
    setFormData({ ...formData, amount: value })
  }

  const handleSubmit = async () => {
    setLoading(true)
    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setLoading(false)
    setStep(3)
    onSubmit?.(formData)
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader className="text-center border-b">
        <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
          <Heart className="h-8 w-8 text-primary" />
        </div>
        <CardTitle className="text-2xl">Make a Donation</CardTitle>
        <CardDescription>
          Your generosity helps us transform lives and communities
        </CardDescription>
      </CardHeader>

      <CardContent className="p-6">
        {/* Progress Steps */}
        <div className="flex items-center justify-center gap-4 mb-8">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  step >= s
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {step > s ? <CheckCircle className="h-5 w-5" /> : s}
              </div>
              {s < 3 && (
                <div
                  className={`w-12 h-1 mx-2 ${
                    step > s ? "bg-primary" : "bg-muted"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Step 1: Amount Selection */}
        {step === 1 && (
          <div className="flex flex-col gap-6">
            {/* Frequency */}
            <div className="flex flex-col gap-3">
              <Label>Donation Frequency</Label>
              <RadioGroup
                value={formData.frequency}
                onValueChange={(value) =>
                  setFormData({ ...formData, frequency: value as "one-time" | "monthly" })
                }
                className="flex gap-4"
              >
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="one-time" id="one-time" />
                  <Label htmlFor="one-time" className="font-normal cursor-pointer">
                    One-time
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem value="monthly" id="monthly" />
                  <Label htmlFor="monthly" className="font-normal cursor-pointer">
                    Monthly
                  </Label>
                </div>
              </RadioGroup>
            </div>

            {/* Amount Selection */}
            <div className="flex flex-col gap-3">
              <Label>Select Amount (KES)</Label>
              <div className="grid grid-cols-3 gap-3">
                {suggestedAmounts.map((amount) => (
                  <button
                    key={amount}
                    onClick={() => handleAmountSelect(amount)}
                    className={`py-3 px-4 rounded-lg border-2 font-semibold transition-colors ${
                      formData.amount === amount
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    KES {amount.toLocaleString()}
                  </button>
                ))}
              </div>
              <div className="mt-2">
                <Label htmlFor="custom-amount">Or enter custom amount</Label>
                <div className="relative mt-2">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                    KES
                  </span>
                  <Input
                    id="custom-amount"
                    type="number"
                    placeholder="Enter amount"
                    value={formData.amount || ""}
                    onChange={handleCustomAmount}
                    className="pl-12"
                  />
                </div>
              </div>
            </div>

            {/* Program Selection */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="program">Donate to</Label>
              <Select
                value={formData.program}
                onValueChange={(value) => setFormData({ ...formData, program: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a program" />
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
              onClick={() => setStep(2)}
              size="lg"
              className="mt-4"
              disabled={formData.amount < 100}
            >
              Continue
            </Button>
          </div>
        )}

        {/* Step 2: Payment Details */}
        {step === 2 && (
          <div className="flex flex-col gap-6">
            {/* Donor Information */}
            <div className="flex flex-col gap-4">
              <h3 className="font-semibold">Your Information</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox
                  id="anonymous"
                  checked={formData.isAnonymous}
                  onCheckedChange={(checked) =>
                    setFormData({ ...formData, isAnonymous: checked as boolean })
                  }
                />
                <Label htmlFor="anonymous" className="font-normal cursor-pointer">
                  Make my donation anonymous
                </Label>
              </div>
            </div>

            {/* Payment Method */}
            <div className="flex flex-col gap-4">
              <h3 className="font-semibold">Payment Method</h3>
              <Tabs
                value={formData.paymentMethod}
                onValueChange={(value) =>
                  setFormData({ ...formData, paymentMethod: value as "mpesa" | "card" })
                }
              >
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="mpesa" className="gap-2">
                    <Smartphone className="h-4 w-4" />
                    M-Pesa
                  </TabsTrigger>
                  <TabsTrigger value="card" className="gap-2">
                    <CreditCard className="h-4 w-4" />
                    Card
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="mpesa" className="mt-4">
                  <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col gap-2">
                        <Label htmlFor="phone">M-Pesa Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="07XX XXX XXX"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                      </div>
                      <p className="text-sm text-muted-foreground">
                        You will receive an M-Pesa STK push to complete the payment.
                      </p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="card" className="mt-4">
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="card-number">Card Number</Label>
                      <Input
                        id="card-number"
                        placeholder="1234 5678 9012 3456"
                        value={formData.cardNumber}
                        onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col gap-2">
                        <Label htmlFor="expiry">Expiry Date</Label>
                        <Input
                          id="expiry"
                          placeholder="MM/YY"
                          value={formData.cardExpiry}
                          onChange={(e) => setFormData({ ...formData, cardExpiry: e.target.value })}
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <Label htmlFor="cvc">CVC</Label>
                        <Input
                          id="cvc"
                          placeholder="123"
                          value={formData.cardCvc}
                          onChange={(e) => setFormData({ ...formData, cardCvc: e.target.value })}
                        />
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Summary */}
            <div className="p-4 bg-muted rounded-lg">
              <h4 className="font-semibold mb-2">Donation Summary</h4>
              <div className="flex justify-between text-sm mb-1">
                <span>Amount</span>
                <span className="font-medium">KES {formData.amount.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm mb-1">
                <span>Frequency</span>
                <span className="font-medium capitalize">{formData.frequency}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Program</span>
                <span className="font-medium">
                  {programs.find((p) => p.value === formData.program)?.label}
                </span>
              </div>
            </div>

            <div className="flex gap-4">
              <Button variant="outline" onClick={() => setStep(1)} className="flex-1">
                Back
              </Button>
              <Button onClick={handleSubmit} className="flex-1" disabled={loading}>
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
          </div>
        )}

        {/* Step 3: Confirmation */}
        {step === 3 && (
          <div className="text-center py-8">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-primary" />
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-2">Thank You!</h3>
            <p className="text-muted-foreground mb-6">
              Your donation of KES {formData.amount.toLocaleString()} has been received.
              {formData.paymentMethod === "mpesa" && " Please check your phone to complete the M-Pesa payment."}
            </p>
            <p className="text-sm text-muted-foreground mb-8">
              A confirmation email has been sent to {formData.email}
            </p>
            <Button
              onClick={() => {
                setStep(1)
                setFormData({
                  amount: 1000,
                  frequency: "one-time",
                  program: "general",
                  paymentMethod: "mpesa",
                  name: "",
                  email: "",
                  phone: "",
                  isAnonymous: false,
                })
              }}
              variant="outline"
            >
              Make Another Donation
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
