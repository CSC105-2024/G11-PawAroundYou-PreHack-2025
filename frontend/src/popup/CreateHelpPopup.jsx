import React, { useEffect, useState } from "react";
import { z } from "zod";
import { createRequest } from "../api/createRequest";

const postSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  locationDistrict: z.string().min(1, "District is required"),
  locationProvince: z.string().min(1, "Province is required"),
});

export default function CreateHelpPopup({ trigger, setTrigger }) {
    
  const [form, setForm] = useState({
    title: "",
    description: "",
    locationDistrict: "",
    locationProvince: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = postSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors = {};
      result.error.errors.forEach((err) => {
        fieldErrors[err.path[0]] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    const realFormData = new FormData();
    realFormData.append(
      "json",
      JSON.stringify({
        title: form.title,
        description: form.description,
        locationDistrict: form.locationDistrict,
        locationProvince: form.locationProvince,
      })
    );

    console.log("Submit form:", form);
    setErrors({});
    setTrigger(false);

    const res = await createRequest(realFormData);

    if (res.success) {
    //   location.reload();
    } else {
      alert("Error creating a pet! Try Again!");
    }
  };

  if (!trigger) return null;

  return (
    <div className="fixed inset-0  bg-opacity-40 flex justify-center items-center z-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-xl shadow-xl w-[90%] max-w-3xl p-8 relative"
      >
        <button
          className="absolute top-4 right-6 text-xl font-bold"
          type="button"
          onClick={() => setTrigger(false)}
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold mb-6">Create post</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Title */}
          <div className="sm:order-1 md:order-1">
            <label className="block font-semibold mb-1">Title</label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="Help me fix it"
              className="w-full p-3 rounded-md shadow focus:outline-none"
            />
            {errors.title && (
              <p className="text-red-500 text-sm">{errors.title}</p>
            )}
          </div>
          {/* Description */}
          <div className="md:order-3 sm:order-2">
            <label className="block font-semibold mb-1">Description</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="My code has a lot of errors..."
              rows={4}
              className="w-full p-3 rounded-md shadow resize-none focus:outline-none"
            ></textarea>
            {errors.description && (
              <p className="text-red-500 text-sm">{errors.description}</p>
            )}
          </div>
          {/* Province + District */}
          <div className="md:order-2 sm:order-3 flex flex-col md:flex-row gap-4">
            <div className="w-full md:w-1/2">
              <label className="block font-semibold mb-1">Province</label>
              <input
                type="text"
                name="locationProvince"
                value={form.locationProvince}
                onChange={handleChange}
                placeholder="Bangkok"
                className="w-full p-3 rounded-md shadow focus:outline-none"
              />
              {errors.locationProvince && (
                <p className="text-red-500 text-sm">
                  {errors.locationProvince}
                </p>
              )}
            </div>
            <div className="w-full md:w-1/2">
              <label className="block font-semibold mb-1">District</label>
              <input
                type="text"
                name="locationDistrict"
                value={form.locationDistrict}
                onChange={handleChange}
                placeholder="Suan Luang"
                className="w-full p-3 rounded-md shadow focus:outline-none"
              />
              {errors.locationDistrict && (
                <p className="text-red-500 text-sm">
                  {errors.locationDistrict}
                </p>
              )}
            </div>
          </div>

          {/* Contact */}
          <div className="order-4">
            <label className="block font-semibold mb-1">Contact</label>
            <div className="p-3 bg-white rounded-md text-gray-600 select-none">
              {/*{user.contact}*/}
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-8">
          <button
            type="submit"
            className="bg-[#89ACCE] text-white px-6 py-2 rounded-md shadow hover:bg-[#7295b8]"
          >
            Post
          </button>
          <button
            type="button"
            onClick={() => setTrigger(false)}
            className="border border-[#89ACCE] text-[#89ACCE] px-6 py-2 rounded-md hover:bg-[#f2f7fb]"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
