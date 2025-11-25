"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema, type SignupFormData } from "@/lib/validation/auth";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";

const steps = [
  { id: "fullname", label: "Nom & Prénom", placeholder: "John Doe" },
  { id: "phone", label: "Numéro de téléphone", placeholder: "+33 6 12 34 56 78" },
  { id: "email", label: "Email", placeholder: "john.doe@example.com", type: "email" },
  { id: "password", label: "Mot de passe", placeholder: "••••••••", type: "password" },
];

export function SignupForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Partial<SignupFormData>>({});

  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger,
  } = useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    mode: "onChange",
    defaultValues: formData,
  });

  const currentField = steps[currentStep];
  const isLastStep = currentStep === steps.length - 1;

  const handleNext = async () => {
    const fieldName = currentField.id as keyof SignupFormData;
    const isValid = await trigger(fieldName);

    if (isValid) {
      if (isLastStep) {
        handleSubmit(onSubmit)();
      } else {
        setCurrentStep((prev) => prev + 1);
      }
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const onSubmit = async (data: SignupFormData) => {
    console.log("Signup data:", data);
    // TODO: Implement signup logic
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleNext();
    }
  };

  return (
    <div className="space-y-8">
      {/* Back Button */}
      {currentStep > 0 && (
        <button
          onClick={handleBack}
          className="inline-flex items-center gap-2 text-[#D9D9D9] hover:text-white transition-colors border border-[#D9D9D9]/30 px-4 py-2 rounded-lg"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>
      )}

      {/* Title */}
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
          Bienvenue sur Coinlect
        </h1>
      </div>

      {/* Progress Indicators */}
      <div className="flex gap-2">
        {steps.map((_, index) => (
          <div
            key={index}
            className={`h-1 flex-1 rounded-full transition-all ${
              index === currentStep
                ? "bg-[#FF9900]"
                : index < currentStep
                ? "bg-[#FF9900]/50"
                : "bg-[#D9D9D9]/20"
            }`}
          />
        ))}
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor={currentField.id} className="text-[#D9D9D9]">
            {currentField.label}
          </Label>
          <Input
            id={currentField.id}
            type={currentField.type || "text"}
            placeholder={currentField.placeholder}
            {...register(currentField.id as keyof SignupFormData)}
            onKeyPress={handleKeyPress}
            autoFocus
            className="border-[#D9D9D9]/30 text-white placeholder:text-[#D9D9D9]/50 focus:border-[#FF9900] focus:ring-[#FF9900]"
          />
          {errors[currentField.id as keyof SignupFormData] && (
            <p className="text-red-500 text-sm">
              {errors[currentField.id as keyof SignupFormData]?.message}
            </p>
          )}
        </div>

        {/* Next Button */}
        <Button
          type="button"
          onClick={handleNext}
          className="w-full h-14 bg-[#FF9900] hover:bg-[#FF9900]/90 text-black font-semibold rounded-lg"
        >
          <ArrowRight className="w-5 h-5" />
        </Button>
      </form>

      {/* Divider */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-[#D9D9D9]/20" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-4 bg-black text-[#D9D9D9]">Ou</span>
        </div>
      </div>

      {/* Google Sign In */}
      <Button
        type="button"
        variant="outline"
        className="w-full h-14 "
      >
        <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
          />
          <path
            fill="currentColor"
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
          />
          <path
            fill="currentColor"
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
          />
          <path
            fill="currentColor"
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
          />
        </svg>
        Continuer avec Google
      </Button>

      {/* Login Link */}
      <p className="text-center text-[#D9D9D9]">
        Déjà un compte ?{" "}
        <Link
          href="/auth/login"
          className="text-[#FF9900] hover:underline font-semibold"
        >
          Se Connecter
        </Link>
      </p>
    </div>
  );
}

