import internal from '../internal/central-internal';
import { ModuleConfig } from '../types/core';
import { ResolveCollection } from '../types/methods';
import { Resolved } from '../types/datasets';

export class Central {
  // eslint-disable-next-line no-unused-vars
  constructor(private readonly config?: ModuleConfig) {}

  /**
   *
   * Resolves a collection based on the provided terms.
   *
   * @link See more https://module.readme.io/reference/collection-search
   * @param {string=} [params.term] - Search term to query.
   * @param {number=} [params.count] - Number of collections to return.
   * @param {boolean=} [params.match] - If the query should only return direct matches.
   * @param {boolean=} [params.isVerified] - If the query should only return matches that are verified on OpenSea/LooksRare/X2Y2.
   */
  public resolveCollection = async (params: ResolveCollection): Promise<Resolved> => {
    return internal._resolveCollection(params, {
      apiKey: this.config?.apiKey
    });
  };
}
