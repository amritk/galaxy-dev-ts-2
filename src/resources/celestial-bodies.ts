// File generated from our OpenAPI spec by Scalar. See README.md for details.

import { APIResource } from '../resource';
import { APIPromise } from '../api-promise';
import type { RequestOptions } from '../internal/request-options';
import type * as PlanetsAPI from './planets';
import type * as AuthenticationAPI from './authentication';

export class CelestialBodies extends APIResource {}

/**
 * A celestial body which can be either a planet or a satellite
 */
export type CelestialBody = PlanetsAPI.Planet | PlanetsAPI.Satellite;
export declare namespace CelestialBodies {
  export { type CelestialBody as CelestialBody };
}
