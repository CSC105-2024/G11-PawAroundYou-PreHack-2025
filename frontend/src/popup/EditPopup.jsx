import React, {useState, useEffect} from "react";

export default function EditPopup({trigger, item, onCancel, onSave}) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [province, setProvince] = useState("");
    const [district, setDistrict] = useState("");
    const [contact, setContact] = useState("");
    const [status, setStatus] = useState("Incomplete");

    useEffect(() => {
        if (item) {
            setTitle(item.title || "");
            setDescription(item.description || "");
            setProvince(item.province || "");
            setDistrict(item.district || "");
            setContact(item.contact || "");
            setStatus(item.status || "Incomplete");
        }
    }, [item]);

    if (!trigger) return null;

    const toggleStatus = () => {
        setStatus((prev) => (prev === "Complete" ? "Incomplete" : "Complete"));
    };

    return (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="bg-white rounded-xl p-6 w-full max-w-3xl shadow-xl relative">

                {/* ✅ Status toggle badge */}
                <button
                    onClick={toggleStatus}
                    title="Click to change status"
                    className={`absolute top-4 right-6 text-sm font-medium px-3 py-1 rounded-full flex items-center gap-2 transition ${
                        status === "Complete"
                            ? "bg-green-100 text-green-600"
                            : "bg-red-100 text-red-600"
                    }`}
                >
  <span
      className={`w-3 h-3 rounded-full ${
          status === "Complete" ? "bg-green-500" : "bg-white"
      }`}
  ></span>
                    {status}
                </button>
                <h2 className="text-xl font-bold mb-6">Edit post</h2>

                <div className="space-y-4">
                    {/* Title */}
                    <div>
                        <label className="font-semibold block mb-1">Title</label>
                        <input
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full px-4 py-2 rounded shadow text-sm"
                            placeholder="Enter title..."
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="font-semibold block mb-1">Description</label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            rows={3}
                            className="w-full px-4 py-2 rounded shadow text-sm resize-none"
                            placeholder="Write something..."
                        />
                    </div>

                    {/* Province + District */}
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1">
                            <label className="font-semibold block mb-1">Province</label>
                            <input
                                value={province}
                                onChange={(e) => setProvince(e.target.value)}
                                className="w-full px-4 py-2 rounded shadow text-sm"
                                placeholder="e.g. Bangkok"
                            />
                        </div>
                        <div className="flex-1">
                            <label className="font-semibold block mb-1">District</label>
                            <input
                                value={district}
                                onChange={(e) => setDistrict(e.target.value)}
                                className="w-full px-4 py-2 rounded shadow text-sm"
                                placeholder="e.g. Suan Luang"
                            />
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <label className="font-semibold block mb-1">Contact</label>
                        <input
                            value={contact}
                            readOnly
                            className="w-full px-4 py-2 rounded shadow text-sm bg-gray-100 cursor-not-allowed text-gray-600"
                        />
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-center gap-4 mt-8">
                    <button
                        onClick={onCancel}
                        className="px-4 py-1 border rounded text-[#89ACCE] border-[#89ACCE] hover:bg-[#ecf5fb]"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={() =>
                            onSave({
                                ...item,
                                title,
                                description,
                                province,
                                district,
                                contact,
                                status,
                            })
                        }
                        className="px-4 py-1 bg-[#89ACCE] text-white rounded hover:bg-[#76a3c3]"
                    >
                        Edit
                    </button>
                </div>
            </div>
        </div>
    );
}