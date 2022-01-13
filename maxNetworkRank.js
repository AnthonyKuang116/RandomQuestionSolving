function maxNetworkRank() {
    const a = [1, 2, 4, 5]
    const b = [2, 3, 5, 6]
    const n = 6;

    const edgeCount = {};
    let maxRank = 0;
    const m = a.length;

    for (let i = 0; i < m; i++) {
        edgeCount[a[i]] = (edgeCount[a[i]] ? edgeCount[a[i]] : 0) + 1;
        edgeCount[b[i]] = (edgeCount[b[i]] ? edgeCount[b[i]] : 0) + 1;
        
    }

    for (let j = 0; j < m; j++) {
        const rank = edgeCount[a[j]] + edgeCount[b[j]] - 1;

        if (rank > maxRank) {
            maxRank = rank;
        }
    }
   
    return maxRank;
}

maxNetworkRank();
