import React from 'react';

export const Home = () => {
  function lengthOfLIS(nums) {
    if (!Array.isArray(nums)) throw new Error("Input must be an array");
    if (nums.length === 0) return 0;

    const tails = [];

    for (let num of nums) {
      let left = 0, right = tails.length;

      while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (tails[mid] < num) left = mid + 1;
        else right = mid;
      }

      tails[left] = num;
    }

    return tails.length;
  }

  const result = lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]);
function twoSum(nums, target) {
  if (!Array.isArray(nums)) throw new Error("First argument must be an array");
  if (typeof target !== 'number') throw new Error("Target must be a number");

  const map = new Map(); // value -> index

  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (map.has(diff)) {
      return [map.get(diff), i];
    }
    map.set(nums[i], i);
  }

  throw new Error("No two sum solution found");
}

// Example
console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]

  const code = `
function lengthOfLIS(nums) {
  if (!Array.isArray(nums)) throw new Error("Input must be an array");
  if (nums.length === 0) return 0;

  const tails = [];

  for (let num of nums) {
    let left = 0, right = tails.length;

    while (left < right) {
      let mid = Math.floor((left + right) / 2);
      if (tails[mid] < num) left = mid + 1;
      else right = mid;
    }

    tails[left] = num;
  }

  return tails.length;
}

// Example
console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])); // Output: 4
`;
  const code2 = `
function twoSum(nums, target) {
  if (!Array.isArray(nums)) throw new Error("First argument must be an array");
  if (typeof target !== 'number') throw new Error("Target must be a number");

  const map = new Map(); // value -> index

  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (map.has(diff)) {
      return [map.get(diff), i];
    }
    map.set(nums[i], i);
  }

  throw new Error("No two sum solution found");
}

// Example
console.log(twoSum([2, 7, 11, 15], 9)); // Output: [0, 1]

`;

  const code3 = `
db.sales.aggregate([
  // Step 1: Unwind the items array
  {
    $unwind: "$items"
  },
  // Step 2: Project required fields and extract year-month
  {
    $project: {
      store: 1,
      month: {
        $dateToString: {
          format: "%Y-%m",
          date: "$date"
        }
      },
      revenue: {
        $multiply: ["$items.quantity", "$items.price"]
      },
      price: "$items.price"
    }
  },
  // Step 3: Group by store and month
  {
    $group: {
      _id: {
        store: "$store",
        month: "$month"
      },
      totalRevenue: { $sum: "$revenue" },
      averagePrice: { $avg: "$price" }
    }
  },
  // Step 4: Rename fields for cleaner output
  {
    $project: {
      _id: 0,
      store: "$_id.store",
      month: "$_id.month",
      totalRevenue: 1,
      averagePrice: 1
    }
  },
  // Step 5: Sort by store and month
  {
    $sort: {
      store: 1,
      month: 1
    }
  }
]);


`;
const op = `
[
  {
    "store": "Store A",
    "month": "2024-06",
    "totalRevenue": 110.0,  // 5*10 + 3*20
    "averagePrice": 15.0    // avg(10, 20)
  },
  {
    "store": "Store B",
    "month": "2024-06",
    "totalRevenue": 150.0,
    "averagePrice": 12.5
  }
]

`
  return (
    <div>
      <div><strong>Output:</strong> {result}</div>
      <pre>
        <strong>Ouestion 1</strong>
        <code>{code}</code>
        <strong>Ouestion 2</strong>
        <code>{code2}</code>
        <strong>Ouestion 3</strong>
         <div><strong>Output:</strong> {op}</div>
        <code>{code3}</code>
      </pre>
    </div>
  );
};
