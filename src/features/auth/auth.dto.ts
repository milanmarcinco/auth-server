import { z } from "zod";

export const registerBody = z.object({
  email: z
    .string({ required_error: "Email is required", invalid_type_error: "Email must be a string" })
    .min(1, "Email is required")
    .email("Wrong email format"),
  password: z
    .string({ required_error: "Password is required", invalid_type_error: "Password must be a string" })
    .min(8, "Password is too short")
    .max(255, "Password is too long"),
});

export const logInBody = z.object({
  email: z
    .string({ required_error: "Email is required to log in", invalid_type_error: "Email must be a string" })
    .min(1, "Email is required to log in")
    .email("Wrong email format"),
  password: z
    .string({ required_error: "Password is required to log in", invalid_type_error: "Password must be a string" })
    .min(1, "Password is required to log in"),
});

export const renewTokensBody = z.object({
  refreshToken: z
    .string({
      required_error: "A valid refresh token is required",
      invalid_type_error: "Refresh token must be a string",
    })
    .min(1, "A valid refresh token is required"),
});

export const changePasswordBody = z.object({
  refreshToken: z
    .string({
      required_error: "A valid refresh token is required",
      invalid_type_error: "Refresh token must be a string",
    })
    .min(1, "A valid refresh token is required"),
  oldPassword: z
    .string({ required_error: "Your old password is required", invalid_type_error: "Password must be a string" })
    .min(1, "Your old password is required"),
  newPassword: z
    .string({ required_error: "Password is required", invalid_type_error: "Password must be a string" })
    .min(8, "Password is too short")
    .max(255, "Password is too long"),
});

export const logOutBody = z.object({
  refreshToken: z
    .string({
      required_error: "A valid refresh token is required",
      invalid_type_error: "Refresh token must be a string",
    })
    .min(1, "A valid refresh token is required"),
});

export const logOutAllBody = z.object({
  refreshToken: z
    .string({
      required_error: "A valid refresh token is required",
      invalid_type_error: "Refresh token must be a string",
    })
    .min(1, "A valid refresh token is required"),
});

export const deleteUserBody = z.object({
  refreshToken: z
    .string({
      required_error: "A valid refresh token is required",
      invalid_type_error: "Refresh token must be a string",
    })
    .min(1, "A valid refresh token is required"),
  password: z
    .string({ required_error: "Password is required", invalid_type_error: "Password must be a string" })
    .min(1, "Password is required"),
});
