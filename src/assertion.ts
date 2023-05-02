let donotKnow: any;
donotKnow = 85;
<number>donotKnow;

const kgToGram = (wight: string | number): string | number | undefined => {
  if (typeof wight === "string") {
    const gram = parseFloat(wight) * 1000;
    return gram;
  } else {
    return wight * 1000;
  }
};

const resultAsNum = <number>kgToGram(5);
