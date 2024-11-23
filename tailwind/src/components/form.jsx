import React from "react";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const demo = (info) => {
    console.log(info);
  };
  return (
    <form
      onSubmit={handleSubmit(demo)}
      className="w-full h-screen bg-slate-950 flex justify-center items-center flex-col text-white gap-5"
    >
      <div className="flex flex-col gap-1 ">
        <label htmlFor="gmail" className="text-[1.30rem]">
          Gmail Daxil Edin:
        </label>
        <input
          id="gmail"
          {...register("email", {
            required: true,
            pattern: /\S+@\S+\.\S+/,
          })}
          type="email"
          className="w-96 rounded-lg bg-slate-700 text-white text-2xl outline-dashed border py-1 border-transparent transition-all delay-200 outline-slate-600 px-2 focus:border-indigo-600"
        />
        {errors.email?.type === "required" && (
          <span className="text-white">Email hissəsini doldurun</span>
        )}
        {errors.email?.type === "pattern" && (
          <span className="text-white">Emaili düzgün yazın</span>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="password1" className="text-[1.30rem]">
          Parol Daxil Edin:
        </label>
        <input
          id="password1"
          {...register("password1", {
            required: true,
            minLength: 8,
            maxLength: 20,
          })}
          className="w-96 rounded-lg bg-slate-700 text-white text-2xl outline-dashed border py-1 border-transparent transition-all delay-200 outline-slate-600 px-2 focus:border-indigo-600"
          type="password"
        />
        {errors.password1?.type === "required" && (
          <span className="text-white">Parol tələb olunur</span>
        )}
        {errors.password1?.type === "minLength" && (
          <span className="text-white">Parol ən azı 8 simvol olmalıdır</span>
        )}
        {errors.password1?.type === "maxLength" && (
          <span className="text-white">Parol maksimum 20 simvol ola bilər</span>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="password2" className="text-[1.30rem]">
          Parolu Yeniden Daxil Edin:
        </label>
        <input
          id="password2"
          {...register("password2", {
            required: true,
            validate: (value) => value === watch("password1"),
          })}
          className="w-96 rounded-lg bg-slate-700 text-white text-2xl outline-dashed border py-1 border-transparent transition-all delay-200 outline-slate-600 px-2 focus:border-indigo-600"
          type="password"
        />
        {errors.password2?.type === "required" && (
          <span className="text-white">Parol tələb olunur</span>
        )}
        {errors.password2?.type === "validate" && (
          <span className="text-white">Parollar uyğun deyil</span>
        )}
      </div>
      <button type="submit" className="rounded-xl bg-green-900 p-3 mt-3">
        Qeydiyyatdan Keç
      </button>
    </form>
  );
};

export default Form;
