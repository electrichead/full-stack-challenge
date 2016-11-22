import IUserInfo from '../interfaces/iUserInfo';
import IAssignedEmployee from '../interfaces/iAssignedEmployee';

interface IAppState {
  userInfo: IUserInfo;
  currentPeriod: string;
  assignedEmployees: Array<IAssignedEmployee>;
};

export default IAppState;
