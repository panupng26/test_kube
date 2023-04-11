// distributed server
const distribute = (servers, jobs) => {
    const baseJobs = Math.floor(jobs / servers);
    const remainder = jobs % servers;
    const distribution = Array.from({ length: servers }, () => []);
  
    for (let i = 0; i < servers; i++) {
      const start = i * baseJobs;
      let end = start + baseJobs;
      if (i < remainder) {
        end++;
      }
      distribution[i] = Array.from({ length: end - start }, (_, j) => start + j);
    }
    return distribution;
}

console.log(distribute(5,20))