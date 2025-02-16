"use server";

import * as z from "zod";
import { SettingsSchema } from "@/schema";
import { currentUser } from "@/lib/auth";
import { getUserById } from "@/data/user";
import { db } from "@/lib/db";

export const settings = async (values: z.infer<typeof SettingsSchema>) => {
  const user = await currentUser();

  if (!user || !user.id) {
    return { error: "Unauthorized" };
  }

  const existingUser = await getUserById(user.id);

  if (!existingUser) {
    return { error: "Unauthorized" };
  }

  await db.user.update({
    where: {
      id: existingUser.id,
    },
    data: {
      ...values,
    },
  });

  return { success: "Settings Updated!" };
};
