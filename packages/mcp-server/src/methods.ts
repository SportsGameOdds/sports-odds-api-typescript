// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { McpOptions } from './options';

export type SdkMethod = {
  clientCallName: string;
  fullyQualifiedName: string;
  httpMethod?: 'get' | 'post' | 'put' | 'patch' | 'delete' | 'query';
  httpPath?: string;
};

export const sdkMethods: SdkMethod[] = [
  {
    clientCallName: 'client.events.get',
    fullyQualifiedName: 'events.get',
    httpMethod: 'get',
    httpPath: '/events/',
  },
  {
    clientCallName: 'client.teams.get',
    fullyQualifiedName: 'teams.get',
    httpMethod: 'get',
    httpPath: '/teams/',
  },
  {
    clientCallName: 'client.players.get',
    fullyQualifiedName: 'players.get',
    httpMethod: 'get',
    httpPath: '/players/',
  },
  {
    clientCallName: 'client.leagues.get',
    fullyQualifiedName: 'leagues.get',
    httpMethod: 'get',
    httpPath: '/leagues/',
  },
  {
    clientCallName: 'client.sports.get',
    fullyQualifiedName: 'sports.get',
    httpMethod: 'get',
    httpPath: '/sports/',
  },
  {
    clientCallName: 'client.stats.get',
    fullyQualifiedName: 'stats.get',
    httpMethod: 'get',
    httpPath: '/stats/',
  },
  {
    clientCallName: 'client.account.getUsage',
    fullyQualifiedName: 'account.getUsage',
    httpMethod: 'get',
    httpPath: '/account/usage',
  },
  {
    clientCallName: 'client.stream.events',
    fullyQualifiedName: 'stream.events',
    httpMethod: 'get',
    httpPath: '/stream/events',
  },
];

function allowedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  if (!options) {
    return undefined;
  }

  let allowedMethods: SdkMethod[];

  if (options.codeAllowHttpGets || options.codeAllowedMethods) {
    // Start with nothing allowed and then add into it from options
    let allowedMethodsSet = new Set<SdkMethod>();

    if (options.codeAllowHttpGets) {
      // Add all methods that map to an HTTP GET
      sdkMethods
        .filter((method) => method.httpMethod === 'get')
        .forEach((method) => allowedMethodsSet.add(method));
    }

    if (options.codeAllowedMethods) {
      // Add all methods that match any of the allowed regexps
      const allowedRegexps = options.codeAllowedMethods.map((pattern) => {
        try {
          return new RegExp(pattern);
        } catch (e) {
          throw new Error(
            `Invalid regex pattern for allowed method: "${pattern}": ${e instanceof Error ? e.message : e}`,
          );
        }
      });

      sdkMethods
        .filter((method) => allowedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)))
        .forEach((method) => allowedMethodsSet.add(method));
    }

    allowedMethods = Array.from(allowedMethodsSet);
  } else {
    // Start with everything allowed
    allowedMethods = [...sdkMethods];
  }

  if (options.codeBlockedMethods) {
    // Filter down based on blocked regexps
    const blockedRegexps = options.codeBlockedMethods.map((pattern) => {
      try {
        return new RegExp(pattern);
      } catch (e) {
        throw new Error(
          `Invalid regex pattern for blocked method: "${pattern}": ${e instanceof Error ? e.message : e}`,
        );
      }
    });

    allowedMethods = allowedMethods.filter(
      (method) => !blockedRegexps.some((regexp) => regexp.test(method.fullyQualifiedName)),
    );
  }

  return allowedMethods;
}

export function blockedMethodsForCodeTool(options: McpOptions | undefined): SdkMethod[] | undefined {
  const allowedMethods = allowedMethodsForCodeTool(options);
  if (!allowedMethods) {
    return undefined;
  }

  const allowedSet = new Set(allowedMethods.map((method) => method.fullyQualifiedName));

  // Return any methods that are not explicitly allowed
  return sdkMethods.filter((method) => !allowedSet.has(method.fullyQualifiedName));
}
