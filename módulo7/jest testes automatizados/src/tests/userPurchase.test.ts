import { describe } from "node:test";
import { performPurchase, User } from "../functions/performPurchase";

describe("Check if said User has money", () => {
  test("Should return the exact amount we expected", () => {
    const user: User = {
      name: "John Doe",
      balance: 100,
    };

    const receipt = performPurchase(user, 40);

    expect(receipt).toEqual({
      ...user,
      balance: 60,
    });
  });

  test("Should we take all the user's hard earned money", () => {
    const user: User = {
      name: "John Doe",
      balance: 120,
    };

    const receipt = performPurchase(user, 120);

    expect(receipt).toEqual({
      ...user,
      balance: 0,
    });
  });

  test("Should return undefined in case the user has insufficient money", () => {
    const user: User = {
      name: "John Doe",
      balance: 100,
    };
    const receipt = performPurchase(user, 140);

    expect(receipt).not.toBeDefined();
  });

  test("Should extract the balance from the object", () => {
    const user: User = {
      name: "John Doe",
      balance: 100,
    };
    const receipt = performPurchase(user, 140);

    expect(receipt).not.toBeDefined();
  });
});
