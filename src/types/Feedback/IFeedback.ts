export interface IFeedbackResponse {
  data: IOneFeedback[];
}

export interface IOneFeedback {
  id: number;
  comment: string;
  star: number;
  user: {
    id: number;
    phone: string;
    profile: {
      id: number;
      firstName: null | string;
      secondName: null | string;
      email: null | string;
      dayOfBirth: null | string;
      monthOfBirth: null | string;
      yearOfBirth: null | string;
    };
  };
}
