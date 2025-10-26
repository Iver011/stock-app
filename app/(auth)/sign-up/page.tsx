"use client";
import { CountrySelectField } from "@/components/forms/CountrySelectField";
import FooterLink from "@/components/forms/FooterLink";
import InputField from "@/components/forms/inputField";
import SelectField from "@/components/forms/SelectField";
import { Button } from "@/components/ui/button";
import {
  INVESTMENT_GOALS,
  PREFERRED_INDUSTRIES,
  RISK_TOLERANCE_OPTIONS,
} from "@/lib/constants";
import { SubmitHandler, useForm } from "react-hook-form";

function SignUp() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      country: "BO",
      investmentGoals: "Growth",
      riskTolerance: "Medium",
      preferredIndustry: "Technology",
    },
    mode: "onBlur",
  });
  const onSubmit: (data: SignUpFormData) => Promise<void> = async (
    data: SignUpFormData,
  ) => {
    try {
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h1 className="form-title">Registrate y personaliza</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <InputField
          name="fullName"
          label="Nombre Completo"
          placeholder="Iver Mamani"
          register={register}
          error={errors.fullName}
          validation={{
            required: "Nombre Completo es necesario",
            minLength: 2,
          }}
        />
        <InputField
          name="email"
          label="Correo Electronico"
          placeholder="iver55pedro@gmail.com"
          register={register}
          error={errors.email}
          validation={{
            required: "Correo electronico es necesario",
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Correo electronico no valido",
          }}
        />
        <InputField
          name="password"
          label="Contraseña"
          placeholder="Ingresa una contraseña segura"
          register={register}
          error={errors.password}
          validation={{ required: "Contraseña es necesaria", minLength: 8 }}
        />
        <CountrySelectField
          name="country"
          label="Pais"
          control={control}
          error={errors.country}
          required
        ></CountrySelectField>
        <SelectField
          name="investmentGoals"
          label="Metas de Inversion"
          placeholder="Selecciona tus metas de inverseion"
          options={INVESTMENT_GOALS}
          control={control}
          error={errors.investmentGoals}
          required
        />
        <SelectField
          name="riskTolerance"
          label="Tolerancia al riesgo"
          placeholder="Selecciona tu tolerancia al riesgo"
          options={RISK_TOLERANCE_OPTIONS}
          control={control}
          error={errors.riskTolerance}
          required
        />
        <SelectField
          name="preferredIndustry"
          label="Industria favorita"
          placeholder="Selecciona tu industria favorita"
          options={PREFERRED_INDUSTRIES}
          control={control}
          error={errors.preferredIndustry}
          required
        />

        <Button
          type="submit"
          disabled={isSubmitting}
          className="yellow-btn w-full mt-5"
        >
          {isSubmitting
            ? "Creando la cuenta"
            : "Comienza tu viaje a la inversion"}
        </Button>
        <FooterLink
          text="Ya tengo una cuenta"
          linkText="Iniciar Sesion"
          href="/sign-in"
        ></FooterLink>
      </form>
    </>
  );
}
export default SignUp;
