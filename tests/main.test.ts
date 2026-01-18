import { getLocalIP } from "../src/utils";

// Mock global fetch
global.fetch = jest.fn();

beforeEach(() => {
  jest.resetAllMocks();
});

test("pass correctly the IP address", async () => {
  const mockFetch = global.fetch as jest.MockedFunction<typeof fetch>;
  mockFetch.mockResolvedValueOnce({
    ok: true,
    text: () => Promise.resolve("12.34.56.78")
  } as Response);

  const localIP = await getLocalIP();
  expect(localIP).toBe("12.34.56.78");
});

test("throws error when fetch fails", async () => {
  const mockFetch = global.fetch as jest.MockedFunction<typeof fetch>;
  mockFetch.mockResolvedValueOnce({
    ok: false,
    statusText: "Service Unavailable"
  } as Response);

  await expect(getLocalIP()).rejects.toThrow("Error getting the IP address: Service Unavailable");
});
