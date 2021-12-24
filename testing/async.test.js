test("the data is peanut butter", (done) => {
  function fetchData(callback) {
    setTimeout(callback, 1000);
  }
  function callback() {
    try {
      expect(1 + 2).toBe(3);
      done();
    } catch (error) {
      done(error);
    }
  }
  fetchData(callback);
});

function fetchData(callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(3);
    }, 1000);
  });
}

test("the data is peanut butter", () => {
  return fetchData().then((data) => {
    expect(data).toBe(3);
  });
});

test("the data is peanut butter1", () => {
  return expect(fetchData()).resolves.toBe(3);
});

test("the data is peanut butter2", async () => {
  const data = await fetchData();
  expect(data).toBe(3);
});
