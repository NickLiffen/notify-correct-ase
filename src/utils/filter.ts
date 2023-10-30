export const filter = async (
  region: string,
  file: file,
): Promise<filteredData> => {
  const arr = file.find((r) => r.salesforceName === region);

  if (arr) {
    const approvers = arr.approvers.join(", ");
    const label = arr.label;
    const override = `${arr.override}`;
    const [singleASE] = arr.approvers;
    return [approvers, label, override, singleASE.replace("@", "")];
  }

  throw new Error(
    `The region sent from Salesforce did not match a local record. The value from salesforce was: ${region}`,
  );
};
