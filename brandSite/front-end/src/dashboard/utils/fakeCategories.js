export const FakeCategories = [
  {
    category: "Clothes",
    subCategories: ["shirt", "tshirt", "jeans", "trousers", "under", "jacket"],
  },
  {
    category: "Shoes",
    subCategories: ["formals", "joggers", "snikkers"],
  },
  {
    category: "accessories",
    subCategories: ["watch", "badge", "earphones", "usb", "tv"],
  },
];

export const addFakeCategory = (category) => {
  if (category) {
    let obj = { category: category, subCategories: [] };
    FakeCategories.push(obj);
  }
};

export const deleteFakeCategory = (category) => {
  if (category) {
    FakeCategories.map((item, index) => {
      if (item.category === category) {
        FakeCategories.splice(index, 1);
      }
    });
  }
};

export const addFakeSubcategory = (category, subcategory) => {
  if (category && subcategory) {
    FakeCategories.map((item) => {
      if (item.category === category) {
        item.subCategories.push(subcategory);
      }
    });
  }
};

export const deleteFakeSubcategory = (category, subcategory) => {
  if (category && subcategory) {
    FakeCategories.map((item) => {
      if (item.category === category) {
        item.subCategories.map((subitem, index) => {
          if (subitem === subcategory) {
            item.subCategories.splice(index, 1);
          }
        });
      }
    });
  }
};
