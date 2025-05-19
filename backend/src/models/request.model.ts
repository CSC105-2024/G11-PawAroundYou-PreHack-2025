import type { $Enums } from "../generated/prisma/index.js";
import { db } from "../index.ts";

export const createRequest = async (
  title: string,
  description: string,
  locationDistrict: string,
  locationProvince: string,
  userId: number
) => {
  const requestForm = db.request.create({
    data: {
      title,
      description,
      locationDistrict,
      locationProvince,
      userId,
    },
  });
  return requestForm;
};

export const editRequest = async (
  id: number,
  title: string,
  description: string,
  locationDistrict: string,
  locationProvince: string,
  status: $Enums.Status
) => {
  const requestForm = db.request.update({
    where: {
      id,
    },
    data: {
      title,
      description,
      locationDistrict,
      locationProvince,
      status,
    },
  });
  return requestForm;
};

export const deleteRequest = async (id: number) => {
  const requestForm = db.request.delete({
    where: {
      id,
    },
  });
  return requestForm;
};

export const getRequest = async (id: number) => {
  const requestForm = db.request.findUnique({
    where: {
      id,
    },
  });
  return getRequest;
};

export const getAllRequest = async () => {
  const tenDaysAgo = new Date();
  tenDaysAgo.setDate(tenDaysAgo.getDate() - 10);
  const requestForm = db.request.findMany({
    where: {
      createdAt: {
        gte: tenDaysAgo,
      },
    },
  });
  return requestForm;
};

export const getAllRequestFromUser = async (userId: number) => {
  const tenDaysAgo = new Date();
  tenDaysAgo.setDate(tenDaysAgo.getDate() - 10);
  const requestForm = db.request.findMany({
    where: {
      userId,
      createdAt: {
        gte: tenDaysAgo,
      },
    },
  });
  return requestForm;
};
