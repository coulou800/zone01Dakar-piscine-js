const blockChain = (data, prev = { index: 0, hash: '0' }) => {
  const block = {
    index: prev.index + 1,
    data: data,
    prev: prev,
    get hash() {
      const str = this.index.toString() + this.prev.hash + JSON.stringify(this.data);
      return hashCode(str);
    },
    chain: function (data) {
      return blockChain(data, this);
    },
  };
  return block;
};