const globalTeardown = async () => {
  await global.MONGO_INSTANCE.stop();
};

export default globalTeardown;
