const balanceBooks = (groupSpending) => {
    const numMembers = Object.keys(groupSpending).length;
    let totalSpending = 0;
    for (const name in groupSpending) {
      totalSpending += groupSpending[name];
    }
    const avgSpending = totalSpending / numMembers;
    const balance = {};
    for (const name in groupSpending) {
      const amountOwed = (groupSpending[name] - avgSpending).toFixed(2);
      balance[name] = Number(amountOwed);
    }
    return balance;
}
let group = {
    A: 20,
    B: 15,
    C: 10
}
console.log(balanceBooks(group))