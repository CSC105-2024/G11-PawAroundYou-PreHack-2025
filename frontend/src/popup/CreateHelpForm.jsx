import React, { useEffect, useState } from "react";
import { createPet } from "./../api/createPost";
import { z } from "zod";
// import { data } from "react-router-dom";

console.log("✅ Form mounted or updated");

// Zod Schema
const helpFormSchema = z.object({
    title: z.string().min(1, "Title is required"),
    description: z.string().min(1, "Description is required"),
    locationDistrict: z.string().min(1, "District is required"),
    locationProvince: z.string().min(1, "Province is required"),
});

export default function CreateHelpForm({ trigger, setTrigger }) {
    const [status, setStatus] = useState(null);
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        locationProvince: "",
        locationDistrict: "",
        contact: "",
    });