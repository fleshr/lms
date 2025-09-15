import { headers } from "next/headers";
import { describe, expect, it, vi } from "vitest";
import { getDevice } from "./getDevice";

vi.mock("next/headers");
const mock = vi.mocked(headers);

const mobileUserAgent =
  "Mozilla/5.0 (iPhone; CPU iPhone OS 14_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.3 Mobile/15E148 Safari/604.1";
const desktopUserAgent =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:143.0) Gecko/20100101 Firefox/143.0";

describe("getDevice", () => {
  it("should return true for mobile device with device param mobile", async () => {
    mock.mockResolvedValue(new Headers({ "User-Agent": mobileUserAgent }));

    const isMobile = await getDevice("mobile");
    expect(isMobile).toBeTruthy();
  });

  it("should return false for mobile device with device param desktop", async () => {
    mock.mockResolvedValue(new Headers({ "User-Agent": mobileUserAgent }));

    const isMobile = await getDevice("desktop");
    expect(isMobile).toBeFalsy();
  });

  it("should return true for desktop device with device param desktop", async () => {
    mock.mockResolvedValue(new Headers({ "User-Agent": desktopUserAgent }));

    const isDesktop = await getDevice("desktop");
    expect(isDesktop).toBeTruthy();
  });

  it("should return false for desktop device with device param mobile", async () => {
    mock.mockResolvedValue(new Headers({ "User-Agent": desktopUserAgent }));

    const isDesktop = await getDevice("mobile");
    expect(isDesktop).toBeFalsy();
  });
});
