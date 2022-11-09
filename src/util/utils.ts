/* eslint-disable @typescript-eslint/no-explicit-any */

interface Parameter {
  value: string;
  key: string;
}

/**
 * Builds out a request query string
 *
 * @param rawParameters - Request parameters
 */
export const buildQuery = (rawParameters: any): string => {
  const parameters: Parameter[] = buildParameters(rawParameters);
  let query = '';
  for (let i = 0; i < parameters.length; i++) {
    if (!parameters[i].value || parameters[i].value === '') break;
    query += parameters[i].key + '=' + encodeURIComponent(parameters[i].value);
    if (i !== parameters.length - 1) {
      query += '&';
    }
  }
  return query;
};

/**
 *  Formats raw parameters
 *
 * @param rawParameters
 */
export const buildParameters = (rawParameters: any): Parameter[] => {
  const parameters: Parameter[] = [];
  Object.keys(rawParameters as Record<string, string | boolean | number>).forEach((key) => {
    parameters.push({
      key,
      value: rawParameters[key]
    });
  });
  return parameters;
};
