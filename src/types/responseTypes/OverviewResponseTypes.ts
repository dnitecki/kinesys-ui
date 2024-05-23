export type OverviewResponseType = {
  response: OverviewDataType[];
};

export type OverviewDataType = {
  [key: string]: {
    data: {
      totalRevenue: number;
      totalYearlySales: number;
      pipeline: number;
      revenueGoal: number;
      pipelineGoal: number;
      salesGoal: number;
    };
  };
};
