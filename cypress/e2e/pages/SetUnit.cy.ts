import { SetUnitArmourBlankState } from "./AddSetUnitTests/Armour/SetUnitArmourBlankState";
import { SetUnitUnit } from "./AddSetUnitTests/Unit/SetUnitUnit";
import { SetUnitBlankState } from "./AddSetUnitTests/Unit/SetUnitBlankState";

describe("Validate Unit Tab ", () => {
  it("Validate Unit Blank state", () => {
    SetUnitBlankState();
  });
  it("Validate Unit tab", () => {
    SetUnitUnit();
  });
});
describe("Validate Armour Tab ", () => {
  it("Validate Armour Blank state", () => {
    SetUnitArmourBlankState();
  });
  // it("Add Armour", () => {
  //   SetUnitUnit();
  // });
  // it("Remove Armour", () => {
  //   SetUnitUnit();
  // });
});
