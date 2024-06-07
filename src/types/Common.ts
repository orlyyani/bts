export interface Login {
  employeeId: number
  password: string
}

export interface Response {
  data: {
    detail: string
    errors: any
  }
  status: number
  statusText: string
  headers: object
  config: object
  request: object
}

export interface Error {
  code: string
  message: string
  name: string
  response: Response
}

export interface Account {
  id: number
  isBenchMember: false
  employeeName: string
}
