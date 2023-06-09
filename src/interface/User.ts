export interface User {
  id : number,
  username : string,
  email: string,
  phone: string,
  imageUri?: string,
  thumbnailUri?: string,
  role : string,
  status: boolean,
  createdAt : string,
  updatedAt : string,
  annualCount: number
}

export interface UserHeaderProfile {
  username: string | undefined,
  email: string | undefined,
  thumbnailUri?: string | undefined
}

export interface UserMyInfo {
  username : string,
  email: string,
  phone: string,
  imageUri?: string,
  role : string,
}

export interface modifyInDTOType {
  username: string,
  phone: string,
  password: string
}

export interface setMyinfoData {
  image?: File,
  modifyInDTO: modifyInDTOType
}

export interface listContent {
  eventId: number,
  eventType: string,
  startDate: string,
  endDate: string,
  createdAt: string,
  updatedAt: string | null,
  orderState: string
}

export interface eventState {
  eventId: number,
  eventType: string,
  startDate: string,
  endDate: string,
  orderState: string
}

export interface cancelEventType {
  eventId: number,
  eventType: string
}
/**
 * Defines Role of User
 *
 * @readonly
 * @enum { string } ADMIN, USER, UNDETERMINED
*/

export enum Role {
  /**
   * User's role is an admin
   */
  ADMIN = 'ADMIN',
  /**
   * User's role is a user
   */
  USER = 'USER',
  /**
   * User's role never assigned, may use for INITIAL VALUE
   */
  UNDETERMINED = 'UNDETERMINED',
}

/**
 * Default user interface.
 * @interface AdminUser
 *
 * @property { id } number
 * @property { username} string
 * @property { email } string
 */
interface AdminUser {
  /**
   * id: number
   */
  id: number;
  username: string;
  email: string;
}

/**
 * Usage: MyPage User Object
 * @interface MyUser
 *
 * @property { id } number
 * @property { username} string
 * @property { email } string
 * @property { role } enum
 *
 * {@link Role}
 */
export interface MyUser extends AdminUser {
  role: Role;
}

/**
 * Usage: Admin Page
 * @interface AuthUser
 * @extends MyUser
 *
 * @property { id } number
 * @property { username} string
 * @property { email } string
 * @property { role } enum
 *
 * @property { createAt } string
 * @property { imageUri } string
 *
 * {@link Role}
 *
 * {@link MyUser}
 */
export interface AuthUser extends MyUser {
  createAt: string;
  imageUri: string;
}

export interface EventOrderRequest {
  eventType: string,
  startDate: Date,
  endDate: Date | null,
  count: number
}

export interface EventGetRequest {
  eventType: string,
  yearMonth: string
}
