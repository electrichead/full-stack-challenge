interface ICurrentReview {
  isCreating: boolean;
  employeeId: number;
  reviewContent: string;
  reviewId?: number;
};

export default ICurrentReview;
