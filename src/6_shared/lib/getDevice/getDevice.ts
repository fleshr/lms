import { headers } from "next/headers";
import { userAgentFromString } from "next/server";

export const getDevice = async (
  device: "mobile" | "desktop" = "mobile",
): Promise<boolean> => {
  const headersList = await headers();
  const userAgent = headersList.get("user-agent") ?? "";
  const deviceType = userAgentFromString(userAgent).device.type ?? "desktop";

  return deviceType === device;
};
