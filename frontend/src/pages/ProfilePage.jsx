import React, { useState } from "react";
import Navbar from "../assets/Navbar.jsx";
import DeletePopup from "../popup/DeletePopup";
import EditPopup from "../popup/EditPopup";
import EditIcon from "/Edit.png";
import EditHoverIcon from "/EditHov.png";
import DeleteIcon from "/Delete.png";
import DeleteHoverIcon from "/DeleteHov.png";

function ProfilePage() {
    const [items, setItems] = useState(
        [...Array(9)].map(() => ({
            title: "How to repair pipes",
            description: "My pipe broke at a curved corner",
            status: "Incomplete",
            location: "Bangkok",
            contact: "098-7869950",
        }))
    );

    // hover effect
    const [editHoverIndex, setEditHoverIndex] = useState(null);
    const [deleteHoverIndex, setDeleteHoverIndex] = useState(null);

    // popup: delete
    const [showConfirm, setShowConfirm] = useState(false);
    const [indexToDelete, setIndexToDelete] = useState(null);

    // popup: edit
    const [showEdit, setShowEdit] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    // delete handler
    const handleConfirmDelete = () => {
        setItems((prev) => prev.filter((_, i) => i !== indexToDelete));
        setShowConfirm(false);
    };

    // edit handler
    const handleSaveEdit = (updatedItem) => {
        setItems((prev) =>
            prev.map((item, i) =>
                i === updatedItem.index ? updatedItem : item
            )
        );
        setShowEdit(false);
    };

    return (
        <>
        <Navbar />
        <div className="min-h-screen bg-[#FFECE2] p-8">


            <h1 className="text-2xl font-bold mb-2">My post</h1>
            <p className="text-[#f57c7c] mb-6">
                Your post will be automatically deleted within 10 days.
            </p>

            {/* cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className="relative bg-white rounded-lg shadow-md p-8 border border-[#89ACCE]"
                    >
         <span
             className={`absolute top-2 right-2 text-xs px-2 py-1 rounded-full ${
                 item.status === "Complete"
                     ? "bg-green-200 text-green-700"
                     : "bg-red-200 text-red-700"
             }`}
         >
  {item.status}
</span>
                        <h2 className="font-semibold mb-1">{item.title}</h2>
                        <p className="text-sm text-gray-600 mb-3">{item.description}</p>

                        <div className="flex gap-2 mt-auto">
                            {/* Edit */}
                            <button
                                onClick={() => {
                                    setSelectedItem({ ...item, index });
                                    setShowEdit(true);
                                }}
                                onMouseEnter={() => setEditHoverIndex(index)}
                                onMouseLeave={() => setEditHoverIndex(null)}
                                className="transition"
                            >
                                <img
                                    src={
                                        editHoverIndex === index ? EditHoverIcon : EditIcon
                                    }
                                    className="w-6 h-6"
                                    alt="Edit Icon"
                                />
                            </button>

                            {/* Delete */}
                            <button
                                onClick={() => {
                                    setIndexToDelete(index);
                                    setShowConfirm(true);
                                }}
                                onMouseEnter={() => setDeleteHoverIndex(index)}
                                onMouseLeave={() => setDeleteHoverIndex(null)}
                                className="transition"
                            >
                                <img
                                    src={
                                        deleteHoverIndex === index
                                            ? DeleteHoverIcon
                                            : DeleteIcon
                                    }
                                    className="w-6 h-6"
                                    alt="Delete Icon"
                                />
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Popup: Delete */}
            <DeletePopup
                trigger={showConfirm}
                onCancel={() => setShowConfirm(false)}
                onConfirm={handleConfirmDelete}
            />

            {/* Popup: Edit */}
            <EditPopup
                trigger={showEdit}
                item={selectedItem}
                onCancel={() => setShowEdit(false)}
                onSave={handleSaveEdit}
            />
        </div>
        </>
    );
}

export default ProfilePage;