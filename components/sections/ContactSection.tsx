import { useFormik } from "formik";

import * as z from "zod";

export default function ContactSection() {
  const formSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    lastName: z.string().min(1, { message: "Last name is required" }),
    email: z.email().min(1, { message: "Email is required" }),
    purpose: z.string().min(1, { message: "Subject is required" }),
    message: z.string().min(1, { message: "Message is required" }),
  });

  const formik = useFormik<z.infer<typeof formSchema>>({
    initialValues: {
      name: "",
      lastName: "",
      email: "",
      purpose: "",
      message: "",
    },
    validationSchema: formSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className="grid grid-cols-1 min-[810px]:grid-cols-[1fr_1fr] gap-4">
      <div className="flex flex-col gap-2">
        <p className="text-[8px] text-primary-text">
          {"<!-- Hero Section -->"}
        </p>
        <p className="text-6xl leading-none font-bold text-transparent bg-clip-text bg-linear-to-b from-white to-(--primary-text) ">
          {" "}
          Let's Work Together
        </p>
      </div>
      <div>
        <form onSubmit={formik.handleSubmit} className="flex flex-col gap-2">
          <div className="grid grid-cols-1 min-[810px]:grid-cols-[1fr_1fr] gap-4">
            {/* First name */}
            <div className="flex flex-col gap-1 ">
              <label htmlFor="name">First name*</label>
              <input
                id="name"
                type="text"
                placeholder="Ilesh"
                value={formik.values.name}
                onChange={formik.handleChange}
                className="border border-(--border-color) rounded-sm p-2 h-[60px] text-[20px]"
              />
              {formik.errors.name && (
                <p className="text-red-500">{formik.errors.name}</p>
              )}
            </div>
            {/* Last name */}
            <div className="flex flex-col gap-1">
              <label htmlFor="last-name">Last name*</label>
              <input
                id="last-name"
                type="text"
                placeholder="Shrestha"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                className="border border-(--border-color) rounded-sm p-2 h-[60px] text-[20px]"
              />
              {formik.errors.lastName && (
                <p className="text-red-500">{formik.errors.lastName}</p>
              )}
            </div>
          </div>
          {/* Email */}
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email address*</label>
            <input
              id="email"
              type="email"
              placeholder="example@gmail.com"
              value={formik.values.email}
              onChange={formik.handleChange}
              className="border border-(--border-color) rounded-sm p-2 h-[60px] text-[20px]"
            />
            {formik.errors.email && (
              <p className="text-red-500">{formik.errors.email}</p>
            )}
          </div>
          {/* Subject */}
          <div className="flex flex-col gap-2">
            <label htmlFor="purpose">Subject*</label>
            <input
              id="purpose"
              type="text"
              placeholder="Tell me the purpose"
              value={formik.values.purpose}
              onChange={formik.handleChange}
              className="border border-(--border-color) rounded-sm p-2 h-[60px] text-[20px]"
            />
            {formik.errors.purpose && (
              <p className="text-red-500">{formik.errors.purpose}</p>
            )}
          </div>
          {/* Message */}
          <div className="flex flex-col gap-2">
            <label htmlFor="message">Message</label>
            <input
              id="message"
              type="text"
              placeholder="Your message"
              value={formik.values.message}
              onChange={formik.handleChange}
              className="border border-(--border-color) rounded-sm p-2 h-[60px] text-[20px]"
            />
            {formik.errors.message && (
              <p className="text-red-500">{formik.errors.message}</p>
            )}
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}
