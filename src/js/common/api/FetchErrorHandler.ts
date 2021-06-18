import { IAction } from "@src/common/actions/IAction";
import { FETCH_FAIL } from "@src/common/actions";

const FetchErrorHandler = (response: any, customMessage?: string): IAction<any>[] => {
  if (!response) {
    return [
      {
        type: FETCH_FAIL,
        payload: { message: customMessage || "Something went wrong" }
      }
    ];
  }

  const { data, status } = response;

  switch (status) {
    case 403:
    case 400:
    case 422:
      return [
        {
          type: FETCH_FAIL,
          payload: {
            message: data.errorMessage || customMessage
          }
        }
      ];

    default:
      console.error(response);

      return [
        {
          type: FETCH_FAIL,
          payload: { message: customMessage || "Something went wrong" }
        }
      ];
  }
};

export default FetchErrorHandler;
