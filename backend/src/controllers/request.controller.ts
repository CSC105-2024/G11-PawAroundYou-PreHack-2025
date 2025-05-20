import type { Context } from "hono";
import * as requestModel from "../models/request.model.ts";
import type { $Enums } from "../generated/prisma/index.js";

type createRequestBody = {
  title: string;
  description: string;
  locationDistrict: string;
  locationProvince: string;
  userId: number;
};

type editRequestBody = {
  title: string;
  description: string;
  locationDistrict: string;
  locationProvince: string;
  status: $Enums.Status;
};

export const createRequest = async (c: Context) => {
  try {
    // //Waiting for Integration
    const userId = c.get("userId");
    const formData = await c.req.parseBody();
    const body = JSON.parse(formData.json as string);
    console.log(body);

    if (
      !body.title ||
      !body.description ||
      !body.locationDistrict ||
      !body.locationProvince
    )
      return c.json(
        {
          success: false,
          data: null,
          msg: "Missing required fields",
        },
        400
      );
    if (!userId)
      return c.json({
        success: false,
        msg: "userId is Undefinded",
      });

    const newRequest = await requestModel.createRequest(
      body.title,
      body.description,
      body.locationDistrict,
      body.locationProvince,
      userId
    );
    return c.json({
      success: true,
      data: newRequest,
      msg: "Created new Request!",
    });
  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `${e}`,
      },
      500
    );
  }
};

export const editRequest = async (c: Context) => {
  try {
    // Integration
    const userId = c.get("userId");
    const formData = await c.req.parseBody();
    const body = JSON.parse(formData.json as string);

    const requestId = c.req.query("requestId");
    // const body = await c.req.json<editRequestBody>();

    if (
      !body.title ||
      !body.description ||
      !body.locationDistrict ||
      !body.locationProvince
    )
      return c.json(
        {
          success: false,
          data: null,
          msg: "Missing required fields",
        },
        400
      );
    if (!requestId)
      return c.json({
        success: false,
        msg: "userId is Undefinded",
      });
    const newRequest = await requestModel.editRequest(
      parseInt(requestId),
      body.title,
      body.description,
      body.locationDistrict,
      body.locationProvince,
      body.status
    );
    return c.json({
      success: true,
      data: newRequest,
      msg: "Edited a Request!",
    });
  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `${e}`,
      },
      500
    );
  }
};

export const deleteRequest = async (c: Context) => {
  try {
    const requestId = c.req.query("requestId");
    if (requestId !== undefined && requestId !== null) {
      const data = await requestModel.deleteRequest(parseInt(requestId));
      return c.json(
        {
          data: data,
          msg: "Delete Success",
        },
        200
      );
    }
    return c.json(
      {
        success: false,
        data: null,
        msg: "Missing required fields",
      },
      400
    );
  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `${e}`,
      },
      500
    );
  }
};

export const getAllRequest = async (c: Context) => {
  try {
    const allRequests = await requestModel.getAllRequest();
    return c.json(allRequests, 200);
  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `${e}`,
      },
      500
    );
  }
};

export const getRequest = async (c: Context) => {
  try {
    const requestId = c.req.query("requestId");
    if (requestId !== undefined && requestId !== null) {
      const data = await requestModel.getRequest(parseInt(requestId));
      return c.json(data, 200);
    }
    return c.json(
      {
        success: false,
        data: null,
        msg: "Missing required fields",
      },
      400
    );
  } catch (e) {
    return c.json(
      {
        success: false,
        data: null,
        msg: `${e}`,
      },
      500
    );
  }
};
