import IUserInfo from '../interfaces/iUserInfo';
import IAssignedEmployee from '../interfaces/iAssignedEmployee';
import ICurrentReview from '../interfaces/iCurrentReview';

interface IAppState {
  userInfo: IUserInfo;
  currentPeriod: string;
  assignedEmployees: Array<IAssignedEmployee>;
  currentReview: ICurrentReview;
};

export default IAppState;
