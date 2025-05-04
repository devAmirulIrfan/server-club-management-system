
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Country
 * 
 */
export type Country = $Result.DefaultSelection<Prisma.$CountryPayload>
/**
 * Model Club
 * 
 */
export type Club = $Result.DefaultSelection<Prisma.$ClubPayload>
/**
 * Model Center
 * 
 */
export type Center = $Result.DefaultSelection<Prisma.$CenterPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Countries
 * const countries = await prisma.country.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Countries
   * const countries = await prisma.country.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.country`: Exposes CRUD operations for the **Country** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Countries
    * const countries = await prisma.country.findMany()
    * ```
    */
  get country(): Prisma.CountryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.club`: Exposes CRUD operations for the **Club** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clubs
    * const clubs = await prisma.club.findMany()
    * ```
    */
  get club(): Prisma.ClubDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.center`: Exposes CRUD operations for the **Center** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Centers
    * const centers = await prisma.center.findMany()
    * ```
    */
  get center(): Prisma.CenterDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.7.0
   * Query Engine version: 3cff47a7f5d65c3ea74883f1d736e41d68ce91ed
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Country: 'Country',
    Club: 'Club',
    Center: 'Center'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "country" | "club" | "center"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Country: {
        payload: Prisma.$CountryPayload<ExtArgs>
        fields: Prisma.CountryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CountryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CountryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          findFirst: {
            args: Prisma.CountryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CountryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          findMany: {
            args: Prisma.CountryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>[]
          }
          create: {
            args: Prisma.CountryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          createMany: {
            args: Prisma.CountryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CountryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>[]
          }
          delete: {
            args: Prisma.CountryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          update: {
            args: Prisma.CountryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          deleteMany: {
            args: Prisma.CountryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CountryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CountryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>[]
          }
          upsert: {
            args: Prisma.CountryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CountryPayload>
          }
          aggregate: {
            args: Prisma.CountryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCountry>
          }
          groupBy: {
            args: Prisma.CountryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CountryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CountryCountArgs<ExtArgs>
            result: $Utils.Optional<CountryCountAggregateOutputType> | number
          }
        }
      }
      Club: {
        payload: Prisma.$ClubPayload<ExtArgs>
        fields: Prisma.ClubFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClubFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClubFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubPayload>
          }
          findFirst: {
            args: Prisma.ClubFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClubFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubPayload>
          }
          findMany: {
            args: Prisma.ClubFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubPayload>[]
          }
          create: {
            args: Prisma.ClubCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubPayload>
          }
          createMany: {
            args: Prisma.ClubCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClubCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubPayload>[]
          }
          delete: {
            args: Prisma.ClubDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubPayload>
          }
          update: {
            args: Prisma.ClubUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubPayload>
          }
          deleteMany: {
            args: Prisma.ClubDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClubUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClubUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubPayload>[]
          }
          upsert: {
            args: Prisma.ClubUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClubPayload>
          }
          aggregate: {
            args: Prisma.ClubAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClub>
          }
          groupBy: {
            args: Prisma.ClubGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClubGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClubCountArgs<ExtArgs>
            result: $Utils.Optional<ClubCountAggregateOutputType> | number
          }
        }
      }
      Center: {
        payload: Prisma.$CenterPayload<ExtArgs>
        fields: Prisma.CenterFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CenterFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CenterPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CenterFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CenterPayload>
          }
          findFirst: {
            args: Prisma.CenterFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CenterPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CenterFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CenterPayload>
          }
          findMany: {
            args: Prisma.CenterFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CenterPayload>[]
          }
          create: {
            args: Prisma.CenterCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CenterPayload>
          }
          createMany: {
            args: Prisma.CenterCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CenterCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CenterPayload>[]
          }
          delete: {
            args: Prisma.CenterDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CenterPayload>
          }
          update: {
            args: Prisma.CenterUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CenterPayload>
          }
          deleteMany: {
            args: Prisma.CenterDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CenterUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CenterUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CenterPayload>[]
          }
          upsert: {
            args: Prisma.CenterUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CenterPayload>
          }
          aggregate: {
            args: Prisma.CenterAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCenter>
          }
          groupBy: {
            args: Prisma.CenterGroupByArgs<ExtArgs>
            result: $Utils.Optional<CenterGroupByOutputType>[]
          }
          count: {
            args: Prisma.CenterCountArgs<ExtArgs>
            result: $Utils.Optional<CenterCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    country?: CountryOmit
    club?: ClubOmit
    center?: CenterOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CountryCountOutputType
   */

  export type CountryCountOutputType = {
    clubs: number
  }

  export type CountryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clubs?: boolean | CountryCountOutputTypeCountClubsArgs
  }

  // Custom InputTypes
  /**
   * CountryCountOutputType without action
   */
  export type CountryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CountryCountOutputType
     */
    select?: CountryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CountryCountOutputType without action
   */
  export type CountryCountOutputTypeCountClubsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClubWhereInput
  }


  /**
   * Count Type ClubCountOutputType
   */

  export type ClubCountOutputType = {
    centers: number
  }

  export type ClubCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    centers?: boolean | ClubCountOutputTypeCountCentersArgs
  }

  // Custom InputTypes
  /**
   * ClubCountOutputType without action
   */
  export type ClubCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClubCountOutputType
     */
    select?: ClubCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClubCountOutputType without action
   */
  export type ClubCountOutputTypeCountCentersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CenterWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Country
   */

  export type AggregateCountry = {
    _count: CountryCountAggregateOutputType | null
    _avg: CountryAvgAggregateOutputType | null
    _sum: CountrySumAggregateOutputType | null
    _min: CountryMinAggregateOutputType | null
    _max: CountryMaxAggregateOutputType | null
  }

  export type CountryAvgAggregateOutputType = {
    id: number | null
  }

  export type CountrySumAggregateOutputType = {
    id: number | null
  }

  export type CountryMinAggregateOutputType = {
    id: number | null
    iso2: string | null
    countryName: string | null
  }

  export type CountryMaxAggregateOutputType = {
    id: number | null
    iso2: string | null
    countryName: string | null
  }

  export type CountryCountAggregateOutputType = {
    id: number
    iso2: number
    countryName: number
    _all: number
  }


  export type CountryAvgAggregateInputType = {
    id?: true
  }

  export type CountrySumAggregateInputType = {
    id?: true
  }

  export type CountryMinAggregateInputType = {
    id?: true
    iso2?: true
    countryName?: true
  }

  export type CountryMaxAggregateInputType = {
    id?: true
    iso2?: true
    countryName?: true
  }

  export type CountryCountAggregateInputType = {
    id?: true
    iso2?: true
    countryName?: true
    _all?: true
  }

  export type CountryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Country to aggregate.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Countries
    **/
    _count?: true | CountryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CountryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CountrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CountryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CountryMaxAggregateInputType
  }

  export type GetCountryAggregateType<T extends CountryAggregateArgs> = {
        [P in keyof T & keyof AggregateCountry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCountry[P]>
      : GetScalarType<T[P], AggregateCountry[P]>
  }




  export type CountryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CountryWhereInput
    orderBy?: CountryOrderByWithAggregationInput | CountryOrderByWithAggregationInput[]
    by: CountryScalarFieldEnum[] | CountryScalarFieldEnum
    having?: CountryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CountryCountAggregateInputType | true
    _avg?: CountryAvgAggregateInputType
    _sum?: CountrySumAggregateInputType
    _min?: CountryMinAggregateInputType
    _max?: CountryMaxAggregateInputType
  }

  export type CountryGroupByOutputType = {
    id: number
    iso2: string
    countryName: string
    _count: CountryCountAggregateOutputType | null
    _avg: CountryAvgAggregateOutputType | null
    _sum: CountrySumAggregateOutputType | null
    _min: CountryMinAggregateOutputType | null
    _max: CountryMaxAggregateOutputType | null
  }

  type GetCountryGroupByPayload<T extends CountryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CountryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CountryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CountryGroupByOutputType[P]>
            : GetScalarType<T[P], CountryGroupByOutputType[P]>
        }
      >
    >


  export type CountrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    iso2?: boolean
    countryName?: boolean
    clubs?: boolean | Country$clubsArgs<ExtArgs>
    _count?: boolean | CountryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["country"]>

  export type CountrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    iso2?: boolean
    countryName?: boolean
  }, ExtArgs["result"]["country"]>

  export type CountrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    iso2?: boolean
    countryName?: boolean
  }, ExtArgs["result"]["country"]>

  export type CountrySelectScalar = {
    id?: boolean
    iso2?: boolean
    countryName?: boolean
  }

  export type CountryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "iso2" | "countryName", ExtArgs["result"]["country"]>
  export type CountryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clubs?: boolean | Country$clubsArgs<ExtArgs>
    _count?: boolean | CountryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CountryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CountryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CountryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Country"
    objects: {
      clubs: Prisma.$ClubPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      iso2: string
      countryName: string
    }, ExtArgs["result"]["country"]>
    composites: {}
  }

  type CountryGetPayload<S extends boolean | null | undefined | CountryDefaultArgs> = $Result.GetResult<Prisma.$CountryPayload, S>

  type CountryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CountryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CountryCountAggregateInputType | true
    }

  export interface CountryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Country'], meta: { name: 'Country' } }
    /**
     * Find zero or one Country that matches the filter.
     * @param {CountryFindUniqueArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CountryFindUniqueArgs>(args: SelectSubset<T, CountryFindUniqueArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Country that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CountryFindUniqueOrThrowArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CountryFindUniqueOrThrowArgs>(args: SelectSubset<T, CountryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Country that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindFirstArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CountryFindFirstArgs>(args?: SelectSubset<T, CountryFindFirstArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Country that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindFirstOrThrowArgs} args - Arguments to find a Country
     * @example
     * // Get one Country
     * const country = await prisma.country.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CountryFindFirstOrThrowArgs>(args?: SelectSubset<T, CountryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Countries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Countries
     * const countries = await prisma.country.findMany()
     * 
     * // Get first 10 Countries
     * const countries = await prisma.country.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const countryWithIdOnly = await prisma.country.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CountryFindManyArgs>(args?: SelectSubset<T, CountryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Country.
     * @param {CountryCreateArgs} args - Arguments to create a Country.
     * @example
     * // Create one Country
     * const Country = await prisma.country.create({
     *   data: {
     *     // ... data to create a Country
     *   }
     * })
     * 
     */
    create<T extends CountryCreateArgs>(args: SelectSubset<T, CountryCreateArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Countries.
     * @param {CountryCreateManyArgs} args - Arguments to create many Countries.
     * @example
     * // Create many Countries
     * const country = await prisma.country.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CountryCreateManyArgs>(args?: SelectSubset<T, CountryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Countries and returns the data saved in the database.
     * @param {CountryCreateManyAndReturnArgs} args - Arguments to create many Countries.
     * @example
     * // Create many Countries
     * const country = await prisma.country.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Countries and only return the `id`
     * const countryWithIdOnly = await prisma.country.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CountryCreateManyAndReturnArgs>(args?: SelectSubset<T, CountryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Country.
     * @param {CountryDeleteArgs} args - Arguments to delete one Country.
     * @example
     * // Delete one Country
     * const Country = await prisma.country.delete({
     *   where: {
     *     // ... filter to delete one Country
     *   }
     * })
     * 
     */
    delete<T extends CountryDeleteArgs>(args: SelectSubset<T, CountryDeleteArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Country.
     * @param {CountryUpdateArgs} args - Arguments to update one Country.
     * @example
     * // Update one Country
     * const country = await prisma.country.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CountryUpdateArgs>(args: SelectSubset<T, CountryUpdateArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Countries.
     * @param {CountryDeleteManyArgs} args - Arguments to filter Countries to delete.
     * @example
     * // Delete a few Countries
     * const { count } = await prisma.country.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CountryDeleteManyArgs>(args?: SelectSubset<T, CountryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Countries
     * const country = await prisma.country.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CountryUpdateManyArgs>(args: SelectSubset<T, CountryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Countries and returns the data updated in the database.
     * @param {CountryUpdateManyAndReturnArgs} args - Arguments to update many Countries.
     * @example
     * // Update many Countries
     * const country = await prisma.country.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Countries and only return the `id`
     * const countryWithIdOnly = await prisma.country.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CountryUpdateManyAndReturnArgs>(args: SelectSubset<T, CountryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Country.
     * @param {CountryUpsertArgs} args - Arguments to update or create a Country.
     * @example
     * // Update or create a Country
     * const country = await prisma.country.upsert({
     *   create: {
     *     // ... data to create a Country
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Country we want to update
     *   }
     * })
     */
    upsert<T extends CountryUpsertArgs>(args: SelectSubset<T, CountryUpsertArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Countries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryCountArgs} args - Arguments to filter Countries to count.
     * @example
     * // Count the number of Countries
     * const count = await prisma.country.count({
     *   where: {
     *     // ... the filter for the Countries we want to count
     *   }
     * })
    **/
    count<T extends CountryCountArgs>(
      args?: Subset<T, CountryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CountryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Country.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CountryAggregateArgs>(args: Subset<T, CountryAggregateArgs>): Prisma.PrismaPromise<GetCountryAggregateType<T>>

    /**
     * Group by Country.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CountryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CountryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CountryGroupByArgs['orderBy'] }
        : { orderBy?: CountryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CountryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCountryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Country model
   */
  readonly fields: CountryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Country.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CountryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    clubs<T extends Country$clubsArgs<ExtArgs> = {}>(args?: Subset<T, Country$clubsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Country model
   */
  interface CountryFieldRefs {
    readonly id: FieldRef<"Country", 'Int'>
    readonly iso2: FieldRef<"Country", 'String'>
    readonly countryName: FieldRef<"Country", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Country findUnique
   */
  export type CountryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where: CountryWhereUniqueInput
  }

  /**
   * Country findUniqueOrThrow
   */
  export type CountryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where: CountryWhereUniqueInput
  }

  /**
   * Country findFirst
   */
  export type CountryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Countries.
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Countries.
     */
    distinct?: CountryScalarFieldEnum | CountryScalarFieldEnum[]
  }

  /**
   * Country findFirstOrThrow
   */
  export type CountryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Country to fetch.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Countries.
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Countries.
     */
    distinct?: CountryScalarFieldEnum | CountryScalarFieldEnum[]
  }

  /**
   * Country findMany
   */
  export type CountryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter, which Countries to fetch.
     */
    where?: CountryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Countries to fetch.
     */
    orderBy?: CountryOrderByWithRelationInput | CountryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Countries.
     */
    cursor?: CountryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Countries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Countries.
     */
    skip?: number
    distinct?: CountryScalarFieldEnum | CountryScalarFieldEnum[]
  }

  /**
   * Country create
   */
  export type CountryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * The data needed to create a Country.
     */
    data: XOR<CountryCreateInput, CountryUncheckedCreateInput>
  }

  /**
   * Country createMany
   */
  export type CountryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Countries.
     */
    data: CountryCreateManyInput | CountryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Country createManyAndReturn
   */
  export type CountryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * The data used to create many Countries.
     */
    data: CountryCreateManyInput | CountryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Country update
   */
  export type CountryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * The data needed to update a Country.
     */
    data: XOR<CountryUpdateInput, CountryUncheckedUpdateInput>
    /**
     * Choose, which Country to update.
     */
    where: CountryWhereUniqueInput
  }

  /**
   * Country updateMany
   */
  export type CountryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Countries.
     */
    data: XOR<CountryUpdateManyMutationInput, CountryUncheckedUpdateManyInput>
    /**
     * Filter which Countries to update
     */
    where?: CountryWhereInput
    /**
     * Limit how many Countries to update.
     */
    limit?: number
  }

  /**
   * Country updateManyAndReturn
   */
  export type CountryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * The data used to update Countries.
     */
    data: XOR<CountryUpdateManyMutationInput, CountryUncheckedUpdateManyInput>
    /**
     * Filter which Countries to update
     */
    where?: CountryWhereInput
    /**
     * Limit how many Countries to update.
     */
    limit?: number
  }

  /**
   * Country upsert
   */
  export type CountryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * The filter to search for the Country to update in case it exists.
     */
    where: CountryWhereUniqueInput
    /**
     * In case the Country found by the `where` argument doesn't exist, create a new Country with this data.
     */
    create: XOR<CountryCreateInput, CountryUncheckedCreateInput>
    /**
     * In case the Country was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CountryUpdateInput, CountryUncheckedUpdateInput>
  }

  /**
   * Country delete
   */
  export type CountryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
    /**
     * Filter which Country to delete.
     */
    where: CountryWhereUniqueInput
  }

  /**
   * Country deleteMany
   */
  export type CountryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Countries to delete
     */
    where?: CountryWhereInput
    /**
     * Limit how many Countries to delete.
     */
    limit?: number
  }

  /**
   * Country.clubs
   */
  export type Country$clubsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubInclude<ExtArgs> | null
    where?: ClubWhereInput
    orderBy?: ClubOrderByWithRelationInput | ClubOrderByWithRelationInput[]
    cursor?: ClubWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClubScalarFieldEnum | ClubScalarFieldEnum[]
  }

  /**
   * Country without action
   */
  export type CountryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Country
     */
    select?: CountrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Country
     */
    omit?: CountryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CountryInclude<ExtArgs> | null
  }


  /**
   * Model Club
   */

  export type AggregateClub = {
    _count: ClubCountAggregateOutputType | null
    _avg: ClubAvgAggregateOutputType | null
    _sum: ClubSumAggregateOutputType | null
    _min: ClubMinAggregateOutputType | null
    _max: ClubMaxAggregateOutputType | null
  }

  export type ClubAvgAggregateOutputType = {
    id: number | null
    countryId: number | null
  }

  export type ClubSumAggregateOutputType = {
    id: number | null
    countryId: number | null
  }

  export type ClubMinAggregateOutputType = {
    id: number | null
    clubName: string | null
    countryId: number | null
  }

  export type ClubMaxAggregateOutputType = {
    id: number | null
    clubName: string | null
    countryId: number | null
  }

  export type ClubCountAggregateOutputType = {
    id: number
    clubName: number
    countryId: number
    _all: number
  }


  export type ClubAvgAggregateInputType = {
    id?: true
    countryId?: true
  }

  export type ClubSumAggregateInputType = {
    id?: true
    countryId?: true
  }

  export type ClubMinAggregateInputType = {
    id?: true
    clubName?: true
    countryId?: true
  }

  export type ClubMaxAggregateInputType = {
    id?: true
    clubName?: true
    countryId?: true
  }

  export type ClubCountAggregateInputType = {
    id?: true
    clubName?: true
    countryId?: true
    _all?: true
  }

  export type ClubAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Club to aggregate.
     */
    where?: ClubWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clubs to fetch.
     */
    orderBy?: ClubOrderByWithRelationInput | ClubOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClubWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clubs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clubs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clubs
    **/
    _count?: true | ClubCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClubAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClubSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClubMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClubMaxAggregateInputType
  }

  export type GetClubAggregateType<T extends ClubAggregateArgs> = {
        [P in keyof T & keyof AggregateClub]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClub[P]>
      : GetScalarType<T[P], AggregateClub[P]>
  }




  export type ClubGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClubWhereInput
    orderBy?: ClubOrderByWithAggregationInput | ClubOrderByWithAggregationInput[]
    by: ClubScalarFieldEnum[] | ClubScalarFieldEnum
    having?: ClubScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClubCountAggregateInputType | true
    _avg?: ClubAvgAggregateInputType
    _sum?: ClubSumAggregateInputType
    _min?: ClubMinAggregateInputType
    _max?: ClubMaxAggregateInputType
  }

  export type ClubGroupByOutputType = {
    id: number
    clubName: string
    countryId: number
    _count: ClubCountAggregateOutputType | null
    _avg: ClubAvgAggregateOutputType | null
    _sum: ClubSumAggregateOutputType | null
    _min: ClubMinAggregateOutputType | null
    _max: ClubMaxAggregateOutputType | null
  }

  type GetClubGroupByPayload<T extends ClubGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClubGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClubGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClubGroupByOutputType[P]>
            : GetScalarType<T[P], ClubGroupByOutputType[P]>
        }
      >
    >


  export type ClubSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clubName?: boolean
    countryId?: boolean
    country?: boolean | CountryDefaultArgs<ExtArgs>
    centers?: boolean | Club$centersArgs<ExtArgs>
    _count?: boolean | ClubCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["club"]>

  export type ClubSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clubName?: boolean
    countryId?: boolean
    country?: boolean | CountryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["club"]>

  export type ClubSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clubName?: boolean
    countryId?: boolean
    country?: boolean | CountryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["club"]>

  export type ClubSelectScalar = {
    id?: boolean
    clubName?: boolean
    countryId?: boolean
  }

  export type ClubOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clubName" | "countryId", ExtArgs["result"]["club"]>
  export type ClubInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    country?: boolean | CountryDefaultArgs<ExtArgs>
    centers?: boolean | Club$centersArgs<ExtArgs>
    _count?: boolean | ClubCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClubIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    country?: boolean | CountryDefaultArgs<ExtArgs>
  }
  export type ClubIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    country?: boolean | CountryDefaultArgs<ExtArgs>
  }

  export type $ClubPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Club"
    objects: {
      country: Prisma.$CountryPayload<ExtArgs>
      centers: Prisma.$CenterPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      clubName: string
      countryId: number
    }, ExtArgs["result"]["club"]>
    composites: {}
  }

  type ClubGetPayload<S extends boolean | null | undefined | ClubDefaultArgs> = $Result.GetResult<Prisma.$ClubPayload, S>

  type ClubCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClubFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClubCountAggregateInputType | true
    }

  export interface ClubDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Club'], meta: { name: 'Club' } }
    /**
     * Find zero or one Club that matches the filter.
     * @param {ClubFindUniqueArgs} args - Arguments to find a Club
     * @example
     * // Get one Club
     * const club = await prisma.club.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClubFindUniqueArgs>(args: SelectSubset<T, ClubFindUniqueArgs<ExtArgs>>): Prisma__ClubClient<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Club that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClubFindUniqueOrThrowArgs} args - Arguments to find a Club
     * @example
     * // Get one Club
     * const club = await prisma.club.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClubFindUniqueOrThrowArgs>(args: SelectSubset<T, ClubFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClubClient<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Club that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClubFindFirstArgs} args - Arguments to find a Club
     * @example
     * // Get one Club
     * const club = await prisma.club.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClubFindFirstArgs>(args?: SelectSubset<T, ClubFindFirstArgs<ExtArgs>>): Prisma__ClubClient<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Club that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClubFindFirstOrThrowArgs} args - Arguments to find a Club
     * @example
     * // Get one Club
     * const club = await prisma.club.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClubFindFirstOrThrowArgs>(args?: SelectSubset<T, ClubFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClubClient<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clubs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClubFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clubs
     * const clubs = await prisma.club.findMany()
     * 
     * // Get first 10 Clubs
     * const clubs = await prisma.club.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clubWithIdOnly = await prisma.club.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClubFindManyArgs>(args?: SelectSubset<T, ClubFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Club.
     * @param {ClubCreateArgs} args - Arguments to create a Club.
     * @example
     * // Create one Club
     * const Club = await prisma.club.create({
     *   data: {
     *     // ... data to create a Club
     *   }
     * })
     * 
     */
    create<T extends ClubCreateArgs>(args: SelectSubset<T, ClubCreateArgs<ExtArgs>>): Prisma__ClubClient<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clubs.
     * @param {ClubCreateManyArgs} args - Arguments to create many Clubs.
     * @example
     * // Create many Clubs
     * const club = await prisma.club.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClubCreateManyArgs>(args?: SelectSubset<T, ClubCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clubs and returns the data saved in the database.
     * @param {ClubCreateManyAndReturnArgs} args - Arguments to create many Clubs.
     * @example
     * // Create many Clubs
     * const club = await prisma.club.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clubs and only return the `id`
     * const clubWithIdOnly = await prisma.club.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClubCreateManyAndReturnArgs>(args?: SelectSubset<T, ClubCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Club.
     * @param {ClubDeleteArgs} args - Arguments to delete one Club.
     * @example
     * // Delete one Club
     * const Club = await prisma.club.delete({
     *   where: {
     *     // ... filter to delete one Club
     *   }
     * })
     * 
     */
    delete<T extends ClubDeleteArgs>(args: SelectSubset<T, ClubDeleteArgs<ExtArgs>>): Prisma__ClubClient<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Club.
     * @param {ClubUpdateArgs} args - Arguments to update one Club.
     * @example
     * // Update one Club
     * const club = await prisma.club.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClubUpdateArgs>(args: SelectSubset<T, ClubUpdateArgs<ExtArgs>>): Prisma__ClubClient<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clubs.
     * @param {ClubDeleteManyArgs} args - Arguments to filter Clubs to delete.
     * @example
     * // Delete a few Clubs
     * const { count } = await prisma.club.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClubDeleteManyArgs>(args?: SelectSubset<T, ClubDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clubs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClubUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clubs
     * const club = await prisma.club.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClubUpdateManyArgs>(args: SelectSubset<T, ClubUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clubs and returns the data updated in the database.
     * @param {ClubUpdateManyAndReturnArgs} args - Arguments to update many Clubs.
     * @example
     * // Update many Clubs
     * const club = await prisma.club.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clubs and only return the `id`
     * const clubWithIdOnly = await prisma.club.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClubUpdateManyAndReturnArgs>(args: SelectSubset<T, ClubUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Club.
     * @param {ClubUpsertArgs} args - Arguments to update or create a Club.
     * @example
     * // Update or create a Club
     * const club = await prisma.club.upsert({
     *   create: {
     *     // ... data to create a Club
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Club we want to update
     *   }
     * })
     */
    upsert<T extends ClubUpsertArgs>(args: SelectSubset<T, ClubUpsertArgs<ExtArgs>>): Prisma__ClubClient<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clubs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClubCountArgs} args - Arguments to filter Clubs to count.
     * @example
     * // Count the number of Clubs
     * const count = await prisma.club.count({
     *   where: {
     *     // ... the filter for the Clubs we want to count
     *   }
     * })
    **/
    count<T extends ClubCountArgs>(
      args?: Subset<T, ClubCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClubCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Club.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClubAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClubAggregateArgs>(args: Subset<T, ClubAggregateArgs>): Prisma.PrismaPromise<GetClubAggregateType<T>>

    /**
     * Group by Club.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClubGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClubGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClubGroupByArgs['orderBy'] }
        : { orderBy?: ClubGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClubGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClubGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Club model
   */
  readonly fields: ClubFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Club.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClubClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    country<T extends CountryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CountryDefaultArgs<ExtArgs>>): Prisma__CountryClient<$Result.GetResult<Prisma.$CountryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    centers<T extends Club$centersArgs<ExtArgs> = {}>(args?: Subset<T, Club$centersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CenterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Club model
   */
  interface ClubFieldRefs {
    readonly id: FieldRef<"Club", 'Int'>
    readonly clubName: FieldRef<"Club", 'String'>
    readonly countryId: FieldRef<"Club", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Club findUnique
   */
  export type ClubFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubInclude<ExtArgs> | null
    /**
     * Filter, which Club to fetch.
     */
    where: ClubWhereUniqueInput
  }

  /**
   * Club findUniqueOrThrow
   */
  export type ClubFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubInclude<ExtArgs> | null
    /**
     * Filter, which Club to fetch.
     */
    where: ClubWhereUniqueInput
  }

  /**
   * Club findFirst
   */
  export type ClubFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubInclude<ExtArgs> | null
    /**
     * Filter, which Club to fetch.
     */
    where?: ClubWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clubs to fetch.
     */
    orderBy?: ClubOrderByWithRelationInput | ClubOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clubs.
     */
    cursor?: ClubWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clubs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clubs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clubs.
     */
    distinct?: ClubScalarFieldEnum | ClubScalarFieldEnum[]
  }

  /**
   * Club findFirstOrThrow
   */
  export type ClubFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubInclude<ExtArgs> | null
    /**
     * Filter, which Club to fetch.
     */
    where?: ClubWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clubs to fetch.
     */
    orderBy?: ClubOrderByWithRelationInput | ClubOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clubs.
     */
    cursor?: ClubWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clubs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clubs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clubs.
     */
    distinct?: ClubScalarFieldEnum | ClubScalarFieldEnum[]
  }

  /**
   * Club findMany
   */
  export type ClubFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubInclude<ExtArgs> | null
    /**
     * Filter, which Clubs to fetch.
     */
    where?: ClubWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clubs to fetch.
     */
    orderBy?: ClubOrderByWithRelationInput | ClubOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clubs.
     */
    cursor?: ClubWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clubs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clubs.
     */
    skip?: number
    distinct?: ClubScalarFieldEnum | ClubScalarFieldEnum[]
  }

  /**
   * Club create
   */
  export type ClubCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubInclude<ExtArgs> | null
    /**
     * The data needed to create a Club.
     */
    data: XOR<ClubCreateInput, ClubUncheckedCreateInput>
  }

  /**
   * Club createMany
   */
  export type ClubCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clubs.
     */
    data: ClubCreateManyInput | ClubCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Club createManyAndReturn
   */
  export type ClubCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * The data used to create many Clubs.
     */
    data: ClubCreateManyInput | ClubCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Club update
   */
  export type ClubUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubInclude<ExtArgs> | null
    /**
     * The data needed to update a Club.
     */
    data: XOR<ClubUpdateInput, ClubUncheckedUpdateInput>
    /**
     * Choose, which Club to update.
     */
    where: ClubWhereUniqueInput
  }

  /**
   * Club updateMany
   */
  export type ClubUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clubs.
     */
    data: XOR<ClubUpdateManyMutationInput, ClubUncheckedUpdateManyInput>
    /**
     * Filter which Clubs to update
     */
    where?: ClubWhereInput
    /**
     * Limit how many Clubs to update.
     */
    limit?: number
  }

  /**
   * Club updateManyAndReturn
   */
  export type ClubUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * The data used to update Clubs.
     */
    data: XOR<ClubUpdateManyMutationInput, ClubUncheckedUpdateManyInput>
    /**
     * Filter which Clubs to update
     */
    where?: ClubWhereInput
    /**
     * Limit how many Clubs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Club upsert
   */
  export type ClubUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubInclude<ExtArgs> | null
    /**
     * The filter to search for the Club to update in case it exists.
     */
    where: ClubWhereUniqueInput
    /**
     * In case the Club found by the `where` argument doesn't exist, create a new Club with this data.
     */
    create: XOR<ClubCreateInput, ClubUncheckedCreateInput>
    /**
     * In case the Club was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClubUpdateInput, ClubUncheckedUpdateInput>
  }

  /**
   * Club delete
   */
  export type ClubDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubInclude<ExtArgs> | null
    /**
     * Filter which Club to delete.
     */
    where: ClubWhereUniqueInput
  }

  /**
   * Club deleteMany
   */
  export type ClubDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clubs to delete
     */
    where?: ClubWhereInput
    /**
     * Limit how many Clubs to delete.
     */
    limit?: number
  }

  /**
   * Club.centers
   */
  export type Club$centersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Center
     */
    select?: CenterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Center
     */
    omit?: CenterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CenterInclude<ExtArgs> | null
    where?: CenterWhereInput
    orderBy?: CenterOrderByWithRelationInput | CenterOrderByWithRelationInput[]
    cursor?: CenterWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CenterScalarFieldEnum | CenterScalarFieldEnum[]
  }

  /**
   * Club without action
   */
  export type ClubDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Club
     */
    select?: ClubSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Club
     */
    omit?: ClubOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClubInclude<ExtArgs> | null
  }


  /**
   * Model Center
   */

  export type AggregateCenter = {
    _count: CenterCountAggregateOutputType | null
    _avg: CenterAvgAggregateOutputType | null
    _sum: CenterSumAggregateOutputType | null
    _min: CenterMinAggregateOutputType | null
    _max: CenterMaxAggregateOutputType | null
  }

  export type CenterAvgAggregateOutputType = {
    id: number | null
    clubId: number | null
  }

  export type CenterSumAggregateOutputType = {
    id: number | null
    clubId: number | null
  }

  export type CenterMinAggregateOutputType = {
    id: number | null
    centerName: string | null
    address: string | null
    city: string | null
    postcode: string | null
    clubId: number | null
  }

  export type CenterMaxAggregateOutputType = {
    id: number | null
    centerName: string | null
    address: string | null
    city: string | null
    postcode: string | null
    clubId: number | null
  }

  export type CenterCountAggregateOutputType = {
    id: number
    centerName: number
    address: number
    city: number
    postcode: number
    clubId: number
    _all: number
  }


  export type CenterAvgAggregateInputType = {
    id?: true
    clubId?: true
  }

  export type CenterSumAggregateInputType = {
    id?: true
    clubId?: true
  }

  export type CenterMinAggregateInputType = {
    id?: true
    centerName?: true
    address?: true
    city?: true
    postcode?: true
    clubId?: true
  }

  export type CenterMaxAggregateInputType = {
    id?: true
    centerName?: true
    address?: true
    city?: true
    postcode?: true
    clubId?: true
  }

  export type CenterCountAggregateInputType = {
    id?: true
    centerName?: true
    address?: true
    city?: true
    postcode?: true
    clubId?: true
    _all?: true
  }

  export type CenterAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Center to aggregate.
     */
    where?: CenterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Centers to fetch.
     */
    orderBy?: CenterOrderByWithRelationInput | CenterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CenterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Centers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Centers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Centers
    **/
    _count?: true | CenterCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CenterAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CenterSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CenterMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CenterMaxAggregateInputType
  }

  export type GetCenterAggregateType<T extends CenterAggregateArgs> = {
        [P in keyof T & keyof AggregateCenter]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCenter[P]>
      : GetScalarType<T[P], AggregateCenter[P]>
  }




  export type CenterGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CenterWhereInput
    orderBy?: CenterOrderByWithAggregationInput | CenterOrderByWithAggregationInput[]
    by: CenterScalarFieldEnum[] | CenterScalarFieldEnum
    having?: CenterScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CenterCountAggregateInputType | true
    _avg?: CenterAvgAggregateInputType
    _sum?: CenterSumAggregateInputType
    _min?: CenterMinAggregateInputType
    _max?: CenterMaxAggregateInputType
  }

  export type CenterGroupByOutputType = {
    id: number
    centerName: string
    address: string
    city: string
    postcode: string
    clubId: number
    _count: CenterCountAggregateOutputType | null
    _avg: CenterAvgAggregateOutputType | null
    _sum: CenterSumAggregateOutputType | null
    _min: CenterMinAggregateOutputType | null
    _max: CenterMaxAggregateOutputType | null
  }

  type GetCenterGroupByPayload<T extends CenterGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CenterGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CenterGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CenterGroupByOutputType[P]>
            : GetScalarType<T[P], CenterGroupByOutputType[P]>
        }
      >
    >


  export type CenterSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    centerName?: boolean
    address?: boolean
    city?: boolean
    postcode?: boolean
    clubId?: boolean
    club?: boolean | ClubDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["center"]>

  export type CenterSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    centerName?: boolean
    address?: boolean
    city?: boolean
    postcode?: boolean
    clubId?: boolean
    club?: boolean | ClubDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["center"]>

  export type CenterSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    centerName?: boolean
    address?: boolean
    city?: boolean
    postcode?: boolean
    clubId?: boolean
    club?: boolean | ClubDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["center"]>

  export type CenterSelectScalar = {
    id?: boolean
    centerName?: boolean
    address?: boolean
    city?: boolean
    postcode?: boolean
    clubId?: boolean
  }

  export type CenterOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "centerName" | "address" | "city" | "postcode" | "clubId", ExtArgs["result"]["center"]>
  export type CenterInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    club?: boolean | ClubDefaultArgs<ExtArgs>
  }
  export type CenterIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    club?: boolean | ClubDefaultArgs<ExtArgs>
  }
  export type CenterIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    club?: boolean | ClubDefaultArgs<ExtArgs>
  }

  export type $CenterPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Center"
    objects: {
      club: Prisma.$ClubPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      centerName: string
      address: string
      city: string
      postcode: string
      clubId: number
    }, ExtArgs["result"]["center"]>
    composites: {}
  }

  type CenterGetPayload<S extends boolean | null | undefined | CenterDefaultArgs> = $Result.GetResult<Prisma.$CenterPayload, S>

  type CenterCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CenterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CenterCountAggregateInputType | true
    }

  export interface CenterDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Center'], meta: { name: 'Center' } }
    /**
     * Find zero or one Center that matches the filter.
     * @param {CenterFindUniqueArgs} args - Arguments to find a Center
     * @example
     * // Get one Center
     * const center = await prisma.center.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CenterFindUniqueArgs>(args: SelectSubset<T, CenterFindUniqueArgs<ExtArgs>>): Prisma__CenterClient<$Result.GetResult<Prisma.$CenterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Center that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CenterFindUniqueOrThrowArgs} args - Arguments to find a Center
     * @example
     * // Get one Center
     * const center = await prisma.center.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CenterFindUniqueOrThrowArgs>(args: SelectSubset<T, CenterFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CenterClient<$Result.GetResult<Prisma.$CenterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Center that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CenterFindFirstArgs} args - Arguments to find a Center
     * @example
     * // Get one Center
     * const center = await prisma.center.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CenterFindFirstArgs>(args?: SelectSubset<T, CenterFindFirstArgs<ExtArgs>>): Prisma__CenterClient<$Result.GetResult<Prisma.$CenterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Center that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CenterFindFirstOrThrowArgs} args - Arguments to find a Center
     * @example
     * // Get one Center
     * const center = await prisma.center.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CenterFindFirstOrThrowArgs>(args?: SelectSubset<T, CenterFindFirstOrThrowArgs<ExtArgs>>): Prisma__CenterClient<$Result.GetResult<Prisma.$CenterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Centers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CenterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Centers
     * const centers = await prisma.center.findMany()
     * 
     * // Get first 10 Centers
     * const centers = await prisma.center.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const centerWithIdOnly = await prisma.center.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CenterFindManyArgs>(args?: SelectSubset<T, CenterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CenterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Center.
     * @param {CenterCreateArgs} args - Arguments to create a Center.
     * @example
     * // Create one Center
     * const Center = await prisma.center.create({
     *   data: {
     *     // ... data to create a Center
     *   }
     * })
     * 
     */
    create<T extends CenterCreateArgs>(args: SelectSubset<T, CenterCreateArgs<ExtArgs>>): Prisma__CenterClient<$Result.GetResult<Prisma.$CenterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Centers.
     * @param {CenterCreateManyArgs} args - Arguments to create many Centers.
     * @example
     * // Create many Centers
     * const center = await prisma.center.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CenterCreateManyArgs>(args?: SelectSubset<T, CenterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Centers and returns the data saved in the database.
     * @param {CenterCreateManyAndReturnArgs} args - Arguments to create many Centers.
     * @example
     * // Create many Centers
     * const center = await prisma.center.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Centers and only return the `id`
     * const centerWithIdOnly = await prisma.center.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CenterCreateManyAndReturnArgs>(args?: SelectSubset<T, CenterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CenterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Center.
     * @param {CenterDeleteArgs} args - Arguments to delete one Center.
     * @example
     * // Delete one Center
     * const Center = await prisma.center.delete({
     *   where: {
     *     // ... filter to delete one Center
     *   }
     * })
     * 
     */
    delete<T extends CenterDeleteArgs>(args: SelectSubset<T, CenterDeleteArgs<ExtArgs>>): Prisma__CenterClient<$Result.GetResult<Prisma.$CenterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Center.
     * @param {CenterUpdateArgs} args - Arguments to update one Center.
     * @example
     * // Update one Center
     * const center = await prisma.center.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CenterUpdateArgs>(args: SelectSubset<T, CenterUpdateArgs<ExtArgs>>): Prisma__CenterClient<$Result.GetResult<Prisma.$CenterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Centers.
     * @param {CenterDeleteManyArgs} args - Arguments to filter Centers to delete.
     * @example
     * // Delete a few Centers
     * const { count } = await prisma.center.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CenterDeleteManyArgs>(args?: SelectSubset<T, CenterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Centers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CenterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Centers
     * const center = await prisma.center.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CenterUpdateManyArgs>(args: SelectSubset<T, CenterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Centers and returns the data updated in the database.
     * @param {CenterUpdateManyAndReturnArgs} args - Arguments to update many Centers.
     * @example
     * // Update many Centers
     * const center = await prisma.center.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Centers and only return the `id`
     * const centerWithIdOnly = await prisma.center.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CenterUpdateManyAndReturnArgs>(args: SelectSubset<T, CenterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CenterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Center.
     * @param {CenterUpsertArgs} args - Arguments to update or create a Center.
     * @example
     * // Update or create a Center
     * const center = await prisma.center.upsert({
     *   create: {
     *     // ... data to create a Center
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Center we want to update
     *   }
     * })
     */
    upsert<T extends CenterUpsertArgs>(args: SelectSubset<T, CenterUpsertArgs<ExtArgs>>): Prisma__CenterClient<$Result.GetResult<Prisma.$CenterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Centers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CenterCountArgs} args - Arguments to filter Centers to count.
     * @example
     * // Count the number of Centers
     * const count = await prisma.center.count({
     *   where: {
     *     // ... the filter for the Centers we want to count
     *   }
     * })
    **/
    count<T extends CenterCountArgs>(
      args?: Subset<T, CenterCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CenterCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Center.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CenterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CenterAggregateArgs>(args: Subset<T, CenterAggregateArgs>): Prisma.PrismaPromise<GetCenterAggregateType<T>>

    /**
     * Group by Center.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CenterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CenterGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CenterGroupByArgs['orderBy'] }
        : { orderBy?: CenterGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CenterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCenterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Center model
   */
  readonly fields: CenterFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Center.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CenterClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    club<T extends ClubDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClubDefaultArgs<ExtArgs>>): Prisma__ClubClient<$Result.GetResult<Prisma.$ClubPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Center model
   */
  interface CenterFieldRefs {
    readonly id: FieldRef<"Center", 'Int'>
    readonly centerName: FieldRef<"Center", 'String'>
    readonly address: FieldRef<"Center", 'String'>
    readonly city: FieldRef<"Center", 'String'>
    readonly postcode: FieldRef<"Center", 'String'>
    readonly clubId: FieldRef<"Center", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Center findUnique
   */
  export type CenterFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Center
     */
    select?: CenterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Center
     */
    omit?: CenterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CenterInclude<ExtArgs> | null
    /**
     * Filter, which Center to fetch.
     */
    where: CenterWhereUniqueInput
  }

  /**
   * Center findUniqueOrThrow
   */
  export type CenterFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Center
     */
    select?: CenterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Center
     */
    omit?: CenterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CenterInclude<ExtArgs> | null
    /**
     * Filter, which Center to fetch.
     */
    where: CenterWhereUniqueInput
  }

  /**
   * Center findFirst
   */
  export type CenterFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Center
     */
    select?: CenterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Center
     */
    omit?: CenterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CenterInclude<ExtArgs> | null
    /**
     * Filter, which Center to fetch.
     */
    where?: CenterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Centers to fetch.
     */
    orderBy?: CenterOrderByWithRelationInput | CenterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Centers.
     */
    cursor?: CenterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Centers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Centers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Centers.
     */
    distinct?: CenterScalarFieldEnum | CenterScalarFieldEnum[]
  }

  /**
   * Center findFirstOrThrow
   */
  export type CenterFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Center
     */
    select?: CenterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Center
     */
    omit?: CenterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CenterInclude<ExtArgs> | null
    /**
     * Filter, which Center to fetch.
     */
    where?: CenterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Centers to fetch.
     */
    orderBy?: CenterOrderByWithRelationInput | CenterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Centers.
     */
    cursor?: CenterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Centers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Centers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Centers.
     */
    distinct?: CenterScalarFieldEnum | CenterScalarFieldEnum[]
  }

  /**
   * Center findMany
   */
  export type CenterFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Center
     */
    select?: CenterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Center
     */
    omit?: CenterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CenterInclude<ExtArgs> | null
    /**
     * Filter, which Centers to fetch.
     */
    where?: CenterWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Centers to fetch.
     */
    orderBy?: CenterOrderByWithRelationInput | CenterOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Centers.
     */
    cursor?: CenterWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Centers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Centers.
     */
    skip?: number
    distinct?: CenterScalarFieldEnum | CenterScalarFieldEnum[]
  }

  /**
   * Center create
   */
  export type CenterCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Center
     */
    select?: CenterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Center
     */
    omit?: CenterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CenterInclude<ExtArgs> | null
    /**
     * The data needed to create a Center.
     */
    data: XOR<CenterCreateInput, CenterUncheckedCreateInput>
  }

  /**
   * Center createMany
   */
  export type CenterCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Centers.
     */
    data: CenterCreateManyInput | CenterCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Center createManyAndReturn
   */
  export type CenterCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Center
     */
    select?: CenterSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Center
     */
    omit?: CenterOmit<ExtArgs> | null
    /**
     * The data used to create many Centers.
     */
    data: CenterCreateManyInput | CenterCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CenterIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Center update
   */
  export type CenterUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Center
     */
    select?: CenterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Center
     */
    omit?: CenterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CenterInclude<ExtArgs> | null
    /**
     * The data needed to update a Center.
     */
    data: XOR<CenterUpdateInput, CenterUncheckedUpdateInput>
    /**
     * Choose, which Center to update.
     */
    where: CenterWhereUniqueInput
  }

  /**
   * Center updateMany
   */
  export type CenterUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Centers.
     */
    data: XOR<CenterUpdateManyMutationInput, CenterUncheckedUpdateManyInput>
    /**
     * Filter which Centers to update
     */
    where?: CenterWhereInput
    /**
     * Limit how many Centers to update.
     */
    limit?: number
  }

  /**
   * Center updateManyAndReturn
   */
  export type CenterUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Center
     */
    select?: CenterSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Center
     */
    omit?: CenterOmit<ExtArgs> | null
    /**
     * The data used to update Centers.
     */
    data: XOR<CenterUpdateManyMutationInput, CenterUncheckedUpdateManyInput>
    /**
     * Filter which Centers to update
     */
    where?: CenterWhereInput
    /**
     * Limit how many Centers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CenterIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Center upsert
   */
  export type CenterUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Center
     */
    select?: CenterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Center
     */
    omit?: CenterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CenterInclude<ExtArgs> | null
    /**
     * The filter to search for the Center to update in case it exists.
     */
    where: CenterWhereUniqueInput
    /**
     * In case the Center found by the `where` argument doesn't exist, create a new Center with this data.
     */
    create: XOR<CenterCreateInput, CenterUncheckedCreateInput>
    /**
     * In case the Center was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CenterUpdateInput, CenterUncheckedUpdateInput>
  }

  /**
   * Center delete
   */
  export type CenterDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Center
     */
    select?: CenterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Center
     */
    omit?: CenterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CenterInclude<ExtArgs> | null
    /**
     * Filter which Center to delete.
     */
    where: CenterWhereUniqueInput
  }

  /**
   * Center deleteMany
   */
  export type CenterDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Centers to delete
     */
    where?: CenterWhereInput
    /**
     * Limit how many Centers to delete.
     */
    limit?: number
  }

  /**
   * Center without action
   */
  export type CenterDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Center
     */
    select?: CenterSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Center
     */
    omit?: CenterOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CenterInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CountryScalarFieldEnum: {
    id: 'id',
    iso2: 'iso2',
    countryName: 'countryName'
  };

  export type CountryScalarFieldEnum = (typeof CountryScalarFieldEnum)[keyof typeof CountryScalarFieldEnum]


  export const ClubScalarFieldEnum: {
    id: 'id',
    clubName: 'clubName',
    countryId: 'countryId'
  };

  export type ClubScalarFieldEnum = (typeof ClubScalarFieldEnum)[keyof typeof ClubScalarFieldEnum]


  export const CenterScalarFieldEnum: {
    id: 'id',
    centerName: 'centerName',
    address: 'address',
    city: 'city',
    postcode: 'postcode',
    clubId: 'clubId'
  };

  export type CenterScalarFieldEnum = (typeof CenterScalarFieldEnum)[keyof typeof CenterScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type CountryWhereInput = {
    AND?: CountryWhereInput | CountryWhereInput[]
    OR?: CountryWhereInput[]
    NOT?: CountryWhereInput | CountryWhereInput[]
    id?: IntFilter<"Country"> | number
    iso2?: StringFilter<"Country"> | string
    countryName?: StringFilter<"Country"> | string
    clubs?: ClubListRelationFilter
  }

  export type CountryOrderByWithRelationInput = {
    id?: SortOrder
    iso2?: SortOrder
    countryName?: SortOrder
    clubs?: ClubOrderByRelationAggregateInput
  }

  export type CountryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    iso2?: string
    countryName?: string
    AND?: CountryWhereInput | CountryWhereInput[]
    OR?: CountryWhereInput[]
    NOT?: CountryWhereInput | CountryWhereInput[]
    clubs?: ClubListRelationFilter
  }, "id" | "iso2" | "countryName">

  export type CountryOrderByWithAggregationInput = {
    id?: SortOrder
    iso2?: SortOrder
    countryName?: SortOrder
    _count?: CountryCountOrderByAggregateInput
    _avg?: CountryAvgOrderByAggregateInput
    _max?: CountryMaxOrderByAggregateInput
    _min?: CountryMinOrderByAggregateInput
    _sum?: CountrySumOrderByAggregateInput
  }

  export type CountryScalarWhereWithAggregatesInput = {
    AND?: CountryScalarWhereWithAggregatesInput | CountryScalarWhereWithAggregatesInput[]
    OR?: CountryScalarWhereWithAggregatesInput[]
    NOT?: CountryScalarWhereWithAggregatesInput | CountryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Country"> | number
    iso2?: StringWithAggregatesFilter<"Country"> | string
    countryName?: StringWithAggregatesFilter<"Country"> | string
  }

  export type ClubWhereInput = {
    AND?: ClubWhereInput | ClubWhereInput[]
    OR?: ClubWhereInput[]
    NOT?: ClubWhereInput | ClubWhereInput[]
    id?: IntFilter<"Club"> | number
    clubName?: StringFilter<"Club"> | string
    countryId?: IntFilter<"Club"> | number
    country?: XOR<CountryScalarRelationFilter, CountryWhereInput>
    centers?: CenterListRelationFilter
  }

  export type ClubOrderByWithRelationInput = {
    id?: SortOrder
    clubName?: SortOrder
    countryId?: SortOrder
    country?: CountryOrderByWithRelationInput
    centers?: CenterOrderByRelationAggregateInput
  }

  export type ClubWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    clubName?: string
    AND?: ClubWhereInput | ClubWhereInput[]
    OR?: ClubWhereInput[]
    NOT?: ClubWhereInput | ClubWhereInput[]
    countryId?: IntFilter<"Club"> | number
    country?: XOR<CountryScalarRelationFilter, CountryWhereInput>
    centers?: CenterListRelationFilter
  }, "id" | "clubName">

  export type ClubOrderByWithAggregationInput = {
    id?: SortOrder
    clubName?: SortOrder
    countryId?: SortOrder
    _count?: ClubCountOrderByAggregateInput
    _avg?: ClubAvgOrderByAggregateInput
    _max?: ClubMaxOrderByAggregateInput
    _min?: ClubMinOrderByAggregateInput
    _sum?: ClubSumOrderByAggregateInput
  }

  export type ClubScalarWhereWithAggregatesInput = {
    AND?: ClubScalarWhereWithAggregatesInput | ClubScalarWhereWithAggregatesInput[]
    OR?: ClubScalarWhereWithAggregatesInput[]
    NOT?: ClubScalarWhereWithAggregatesInput | ClubScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Club"> | number
    clubName?: StringWithAggregatesFilter<"Club"> | string
    countryId?: IntWithAggregatesFilter<"Club"> | number
  }

  export type CenterWhereInput = {
    AND?: CenterWhereInput | CenterWhereInput[]
    OR?: CenterWhereInput[]
    NOT?: CenterWhereInput | CenterWhereInput[]
    id?: IntFilter<"Center"> | number
    centerName?: StringFilter<"Center"> | string
    address?: StringFilter<"Center"> | string
    city?: StringFilter<"Center"> | string
    postcode?: StringFilter<"Center"> | string
    clubId?: IntFilter<"Center"> | number
    club?: XOR<ClubScalarRelationFilter, ClubWhereInput>
  }

  export type CenterOrderByWithRelationInput = {
    id?: SortOrder
    centerName?: SortOrder
    address?: SortOrder
    city?: SortOrder
    postcode?: SortOrder
    clubId?: SortOrder
    club?: ClubOrderByWithRelationInput
  }

  export type CenterWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CenterWhereInput | CenterWhereInput[]
    OR?: CenterWhereInput[]
    NOT?: CenterWhereInput | CenterWhereInput[]
    centerName?: StringFilter<"Center"> | string
    address?: StringFilter<"Center"> | string
    city?: StringFilter<"Center"> | string
    postcode?: StringFilter<"Center"> | string
    clubId?: IntFilter<"Center"> | number
    club?: XOR<ClubScalarRelationFilter, ClubWhereInput>
  }, "id">

  export type CenterOrderByWithAggregationInput = {
    id?: SortOrder
    centerName?: SortOrder
    address?: SortOrder
    city?: SortOrder
    postcode?: SortOrder
    clubId?: SortOrder
    _count?: CenterCountOrderByAggregateInput
    _avg?: CenterAvgOrderByAggregateInput
    _max?: CenterMaxOrderByAggregateInput
    _min?: CenterMinOrderByAggregateInput
    _sum?: CenterSumOrderByAggregateInput
  }

  export type CenterScalarWhereWithAggregatesInput = {
    AND?: CenterScalarWhereWithAggregatesInput | CenterScalarWhereWithAggregatesInput[]
    OR?: CenterScalarWhereWithAggregatesInput[]
    NOT?: CenterScalarWhereWithAggregatesInput | CenterScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Center"> | number
    centerName?: StringWithAggregatesFilter<"Center"> | string
    address?: StringWithAggregatesFilter<"Center"> | string
    city?: StringWithAggregatesFilter<"Center"> | string
    postcode?: StringWithAggregatesFilter<"Center"> | string
    clubId?: IntWithAggregatesFilter<"Center"> | number
  }

  export type CountryCreateInput = {
    iso2: string
    countryName: string
    clubs?: ClubCreateNestedManyWithoutCountryInput
  }

  export type CountryUncheckedCreateInput = {
    id?: number
    iso2: string
    countryName: string
    clubs?: ClubUncheckedCreateNestedManyWithoutCountryInput
  }

  export type CountryUpdateInput = {
    iso2?: StringFieldUpdateOperationsInput | string
    countryName?: StringFieldUpdateOperationsInput | string
    clubs?: ClubUpdateManyWithoutCountryNestedInput
  }

  export type CountryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    iso2?: StringFieldUpdateOperationsInput | string
    countryName?: StringFieldUpdateOperationsInput | string
    clubs?: ClubUncheckedUpdateManyWithoutCountryNestedInput
  }

  export type CountryCreateManyInput = {
    id?: number
    iso2: string
    countryName: string
  }

  export type CountryUpdateManyMutationInput = {
    iso2?: StringFieldUpdateOperationsInput | string
    countryName?: StringFieldUpdateOperationsInput | string
  }

  export type CountryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    iso2?: StringFieldUpdateOperationsInput | string
    countryName?: StringFieldUpdateOperationsInput | string
  }

  export type ClubCreateInput = {
    clubName: string
    country: CountryCreateNestedOneWithoutClubsInput
    centers?: CenterCreateNestedManyWithoutClubInput
  }

  export type ClubUncheckedCreateInput = {
    id?: number
    clubName: string
    countryId: number
    centers?: CenterUncheckedCreateNestedManyWithoutClubInput
  }

  export type ClubUpdateInput = {
    clubName?: StringFieldUpdateOperationsInput | string
    country?: CountryUpdateOneRequiredWithoutClubsNestedInput
    centers?: CenterUpdateManyWithoutClubNestedInput
  }

  export type ClubUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    clubName?: StringFieldUpdateOperationsInput | string
    countryId?: IntFieldUpdateOperationsInput | number
    centers?: CenterUncheckedUpdateManyWithoutClubNestedInput
  }

  export type ClubCreateManyInput = {
    id?: number
    clubName: string
    countryId: number
  }

  export type ClubUpdateManyMutationInput = {
    clubName?: StringFieldUpdateOperationsInput | string
  }

  export type ClubUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    clubName?: StringFieldUpdateOperationsInput | string
    countryId?: IntFieldUpdateOperationsInput | number
  }

  export type CenterCreateInput = {
    centerName: string
    address: string
    city: string
    postcode: string
    club: ClubCreateNestedOneWithoutCentersInput
  }

  export type CenterUncheckedCreateInput = {
    id?: number
    centerName: string
    address: string
    city: string
    postcode: string
    clubId: number
  }

  export type CenterUpdateInput = {
    centerName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postcode?: StringFieldUpdateOperationsInput | string
    club?: ClubUpdateOneRequiredWithoutCentersNestedInput
  }

  export type CenterUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    centerName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postcode?: StringFieldUpdateOperationsInput | string
    clubId?: IntFieldUpdateOperationsInput | number
  }

  export type CenterCreateManyInput = {
    id?: number
    centerName: string
    address: string
    city: string
    postcode: string
    clubId: number
  }

  export type CenterUpdateManyMutationInput = {
    centerName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postcode?: StringFieldUpdateOperationsInput | string
  }

  export type CenterUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    centerName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postcode?: StringFieldUpdateOperationsInput | string
    clubId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type ClubListRelationFilter = {
    every?: ClubWhereInput
    some?: ClubWhereInput
    none?: ClubWhereInput
  }

  export type ClubOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CountryCountOrderByAggregateInput = {
    id?: SortOrder
    iso2?: SortOrder
    countryName?: SortOrder
  }

  export type CountryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CountryMaxOrderByAggregateInput = {
    id?: SortOrder
    iso2?: SortOrder
    countryName?: SortOrder
  }

  export type CountryMinOrderByAggregateInput = {
    id?: SortOrder
    iso2?: SortOrder
    countryName?: SortOrder
  }

  export type CountrySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type CountryScalarRelationFilter = {
    is?: CountryWhereInput
    isNot?: CountryWhereInput
  }

  export type CenterListRelationFilter = {
    every?: CenterWhereInput
    some?: CenterWhereInput
    none?: CenterWhereInput
  }

  export type CenterOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClubCountOrderByAggregateInput = {
    id?: SortOrder
    clubName?: SortOrder
    countryId?: SortOrder
  }

  export type ClubAvgOrderByAggregateInput = {
    id?: SortOrder
    countryId?: SortOrder
  }

  export type ClubMaxOrderByAggregateInput = {
    id?: SortOrder
    clubName?: SortOrder
    countryId?: SortOrder
  }

  export type ClubMinOrderByAggregateInput = {
    id?: SortOrder
    clubName?: SortOrder
    countryId?: SortOrder
  }

  export type ClubSumOrderByAggregateInput = {
    id?: SortOrder
    countryId?: SortOrder
  }

  export type ClubScalarRelationFilter = {
    is?: ClubWhereInput
    isNot?: ClubWhereInput
  }

  export type CenterCountOrderByAggregateInput = {
    id?: SortOrder
    centerName?: SortOrder
    address?: SortOrder
    city?: SortOrder
    postcode?: SortOrder
    clubId?: SortOrder
  }

  export type CenterAvgOrderByAggregateInput = {
    id?: SortOrder
    clubId?: SortOrder
  }

  export type CenterMaxOrderByAggregateInput = {
    id?: SortOrder
    centerName?: SortOrder
    address?: SortOrder
    city?: SortOrder
    postcode?: SortOrder
    clubId?: SortOrder
  }

  export type CenterMinOrderByAggregateInput = {
    id?: SortOrder
    centerName?: SortOrder
    address?: SortOrder
    city?: SortOrder
    postcode?: SortOrder
    clubId?: SortOrder
  }

  export type CenterSumOrderByAggregateInput = {
    id?: SortOrder
    clubId?: SortOrder
  }

  export type ClubCreateNestedManyWithoutCountryInput = {
    create?: XOR<ClubCreateWithoutCountryInput, ClubUncheckedCreateWithoutCountryInput> | ClubCreateWithoutCountryInput[] | ClubUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: ClubCreateOrConnectWithoutCountryInput | ClubCreateOrConnectWithoutCountryInput[]
    createMany?: ClubCreateManyCountryInputEnvelope
    connect?: ClubWhereUniqueInput | ClubWhereUniqueInput[]
  }

  export type ClubUncheckedCreateNestedManyWithoutCountryInput = {
    create?: XOR<ClubCreateWithoutCountryInput, ClubUncheckedCreateWithoutCountryInput> | ClubCreateWithoutCountryInput[] | ClubUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: ClubCreateOrConnectWithoutCountryInput | ClubCreateOrConnectWithoutCountryInput[]
    createMany?: ClubCreateManyCountryInputEnvelope
    connect?: ClubWhereUniqueInput | ClubWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type ClubUpdateManyWithoutCountryNestedInput = {
    create?: XOR<ClubCreateWithoutCountryInput, ClubUncheckedCreateWithoutCountryInput> | ClubCreateWithoutCountryInput[] | ClubUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: ClubCreateOrConnectWithoutCountryInput | ClubCreateOrConnectWithoutCountryInput[]
    upsert?: ClubUpsertWithWhereUniqueWithoutCountryInput | ClubUpsertWithWhereUniqueWithoutCountryInput[]
    createMany?: ClubCreateManyCountryInputEnvelope
    set?: ClubWhereUniqueInput | ClubWhereUniqueInput[]
    disconnect?: ClubWhereUniqueInput | ClubWhereUniqueInput[]
    delete?: ClubWhereUniqueInput | ClubWhereUniqueInput[]
    connect?: ClubWhereUniqueInput | ClubWhereUniqueInput[]
    update?: ClubUpdateWithWhereUniqueWithoutCountryInput | ClubUpdateWithWhereUniqueWithoutCountryInput[]
    updateMany?: ClubUpdateManyWithWhereWithoutCountryInput | ClubUpdateManyWithWhereWithoutCountryInput[]
    deleteMany?: ClubScalarWhereInput | ClubScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ClubUncheckedUpdateManyWithoutCountryNestedInput = {
    create?: XOR<ClubCreateWithoutCountryInput, ClubUncheckedCreateWithoutCountryInput> | ClubCreateWithoutCountryInput[] | ClubUncheckedCreateWithoutCountryInput[]
    connectOrCreate?: ClubCreateOrConnectWithoutCountryInput | ClubCreateOrConnectWithoutCountryInput[]
    upsert?: ClubUpsertWithWhereUniqueWithoutCountryInput | ClubUpsertWithWhereUniqueWithoutCountryInput[]
    createMany?: ClubCreateManyCountryInputEnvelope
    set?: ClubWhereUniqueInput | ClubWhereUniqueInput[]
    disconnect?: ClubWhereUniqueInput | ClubWhereUniqueInput[]
    delete?: ClubWhereUniqueInput | ClubWhereUniqueInput[]
    connect?: ClubWhereUniqueInput | ClubWhereUniqueInput[]
    update?: ClubUpdateWithWhereUniqueWithoutCountryInput | ClubUpdateWithWhereUniqueWithoutCountryInput[]
    updateMany?: ClubUpdateManyWithWhereWithoutCountryInput | ClubUpdateManyWithWhereWithoutCountryInput[]
    deleteMany?: ClubScalarWhereInput | ClubScalarWhereInput[]
  }

  export type CountryCreateNestedOneWithoutClubsInput = {
    create?: XOR<CountryCreateWithoutClubsInput, CountryUncheckedCreateWithoutClubsInput>
    connectOrCreate?: CountryCreateOrConnectWithoutClubsInput
    connect?: CountryWhereUniqueInput
  }

  export type CenterCreateNestedManyWithoutClubInput = {
    create?: XOR<CenterCreateWithoutClubInput, CenterUncheckedCreateWithoutClubInput> | CenterCreateWithoutClubInput[] | CenterUncheckedCreateWithoutClubInput[]
    connectOrCreate?: CenterCreateOrConnectWithoutClubInput | CenterCreateOrConnectWithoutClubInput[]
    createMany?: CenterCreateManyClubInputEnvelope
    connect?: CenterWhereUniqueInput | CenterWhereUniqueInput[]
  }

  export type CenterUncheckedCreateNestedManyWithoutClubInput = {
    create?: XOR<CenterCreateWithoutClubInput, CenterUncheckedCreateWithoutClubInput> | CenterCreateWithoutClubInput[] | CenterUncheckedCreateWithoutClubInput[]
    connectOrCreate?: CenterCreateOrConnectWithoutClubInput | CenterCreateOrConnectWithoutClubInput[]
    createMany?: CenterCreateManyClubInputEnvelope
    connect?: CenterWhereUniqueInput | CenterWhereUniqueInput[]
  }

  export type CountryUpdateOneRequiredWithoutClubsNestedInput = {
    create?: XOR<CountryCreateWithoutClubsInput, CountryUncheckedCreateWithoutClubsInput>
    connectOrCreate?: CountryCreateOrConnectWithoutClubsInput
    upsert?: CountryUpsertWithoutClubsInput
    connect?: CountryWhereUniqueInput
    update?: XOR<XOR<CountryUpdateToOneWithWhereWithoutClubsInput, CountryUpdateWithoutClubsInput>, CountryUncheckedUpdateWithoutClubsInput>
  }

  export type CenterUpdateManyWithoutClubNestedInput = {
    create?: XOR<CenterCreateWithoutClubInput, CenterUncheckedCreateWithoutClubInput> | CenterCreateWithoutClubInput[] | CenterUncheckedCreateWithoutClubInput[]
    connectOrCreate?: CenterCreateOrConnectWithoutClubInput | CenterCreateOrConnectWithoutClubInput[]
    upsert?: CenterUpsertWithWhereUniqueWithoutClubInput | CenterUpsertWithWhereUniqueWithoutClubInput[]
    createMany?: CenterCreateManyClubInputEnvelope
    set?: CenterWhereUniqueInput | CenterWhereUniqueInput[]
    disconnect?: CenterWhereUniqueInput | CenterWhereUniqueInput[]
    delete?: CenterWhereUniqueInput | CenterWhereUniqueInput[]
    connect?: CenterWhereUniqueInput | CenterWhereUniqueInput[]
    update?: CenterUpdateWithWhereUniqueWithoutClubInput | CenterUpdateWithWhereUniqueWithoutClubInput[]
    updateMany?: CenterUpdateManyWithWhereWithoutClubInput | CenterUpdateManyWithWhereWithoutClubInput[]
    deleteMany?: CenterScalarWhereInput | CenterScalarWhereInput[]
  }

  export type CenterUncheckedUpdateManyWithoutClubNestedInput = {
    create?: XOR<CenterCreateWithoutClubInput, CenterUncheckedCreateWithoutClubInput> | CenterCreateWithoutClubInput[] | CenterUncheckedCreateWithoutClubInput[]
    connectOrCreate?: CenterCreateOrConnectWithoutClubInput | CenterCreateOrConnectWithoutClubInput[]
    upsert?: CenterUpsertWithWhereUniqueWithoutClubInput | CenterUpsertWithWhereUniqueWithoutClubInput[]
    createMany?: CenterCreateManyClubInputEnvelope
    set?: CenterWhereUniqueInput | CenterWhereUniqueInput[]
    disconnect?: CenterWhereUniqueInput | CenterWhereUniqueInput[]
    delete?: CenterWhereUniqueInput | CenterWhereUniqueInput[]
    connect?: CenterWhereUniqueInput | CenterWhereUniqueInput[]
    update?: CenterUpdateWithWhereUniqueWithoutClubInput | CenterUpdateWithWhereUniqueWithoutClubInput[]
    updateMany?: CenterUpdateManyWithWhereWithoutClubInput | CenterUpdateManyWithWhereWithoutClubInput[]
    deleteMany?: CenterScalarWhereInput | CenterScalarWhereInput[]
  }

  export type ClubCreateNestedOneWithoutCentersInput = {
    create?: XOR<ClubCreateWithoutCentersInput, ClubUncheckedCreateWithoutCentersInput>
    connectOrCreate?: ClubCreateOrConnectWithoutCentersInput
    connect?: ClubWhereUniqueInput
  }

  export type ClubUpdateOneRequiredWithoutCentersNestedInput = {
    create?: XOR<ClubCreateWithoutCentersInput, ClubUncheckedCreateWithoutCentersInput>
    connectOrCreate?: ClubCreateOrConnectWithoutCentersInput
    upsert?: ClubUpsertWithoutCentersInput
    connect?: ClubWhereUniqueInput
    update?: XOR<XOR<ClubUpdateToOneWithWhereWithoutCentersInput, ClubUpdateWithoutCentersInput>, ClubUncheckedUpdateWithoutCentersInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type ClubCreateWithoutCountryInput = {
    clubName: string
    centers?: CenterCreateNestedManyWithoutClubInput
  }

  export type ClubUncheckedCreateWithoutCountryInput = {
    id?: number
    clubName: string
    centers?: CenterUncheckedCreateNestedManyWithoutClubInput
  }

  export type ClubCreateOrConnectWithoutCountryInput = {
    where: ClubWhereUniqueInput
    create: XOR<ClubCreateWithoutCountryInput, ClubUncheckedCreateWithoutCountryInput>
  }

  export type ClubCreateManyCountryInputEnvelope = {
    data: ClubCreateManyCountryInput | ClubCreateManyCountryInput[]
    skipDuplicates?: boolean
  }

  export type ClubUpsertWithWhereUniqueWithoutCountryInput = {
    where: ClubWhereUniqueInput
    update: XOR<ClubUpdateWithoutCountryInput, ClubUncheckedUpdateWithoutCountryInput>
    create: XOR<ClubCreateWithoutCountryInput, ClubUncheckedCreateWithoutCountryInput>
  }

  export type ClubUpdateWithWhereUniqueWithoutCountryInput = {
    where: ClubWhereUniqueInput
    data: XOR<ClubUpdateWithoutCountryInput, ClubUncheckedUpdateWithoutCountryInput>
  }

  export type ClubUpdateManyWithWhereWithoutCountryInput = {
    where: ClubScalarWhereInput
    data: XOR<ClubUpdateManyMutationInput, ClubUncheckedUpdateManyWithoutCountryInput>
  }

  export type ClubScalarWhereInput = {
    AND?: ClubScalarWhereInput | ClubScalarWhereInput[]
    OR?: ClubScalarWhereInput[]
    NOT?: ClubScalarWhereInput | ClubScalarWhereInput[]
    id?: IntFilter<"Club"> | number
    clubName?: StringFilter<"Club"> | string
    countryId?: IntFilter<"Club"> | number
  }

  export type CountryCreateWithoutClubsInput = {
    iso2: string
    countryName: string
  }

  export type CountryUncheckedCreateWithoutClubsInput = {
    id?: number
    iso2: string
    countryName: string
  }

  export type CountryCreateOrConnectWithoutClubsInput = {
    where: CountryWhereUniqueInput
    create: XOR<CountryCreateWithoutClubsInput, CountryUncheckedCreateWithoutClubsInput>
  }

  export type CenterCreateWithoutClubInput = {
    centerName: string
    address: string
    city: string
    postcode: string
  }

  export type CenterUncheckedCreateWithoutClubInput = {
    id?: number
    centerName: string
    address: string
    city: string
    postcode: string
  }

  export type CenterCreateOrConnectWithoutClubInput = {
    where: CenterWhereUniqueInput
    create: XOR<CenterCreateWithoutClubInput, CenterUncheckedCreateWithoutClubInput>
  }

  export type CenterCreateManyClubInputEnvelope = {
    data: CenterCreateManyClubInput | CenterCreateManyClubInput[]
    skipDuplicates?: boolean
  }

  export type CountryUpsertWithoutClubsInput = {
    update: XOR<CountryUpdateWithoutClubsInput, CountryUncheckedUpdateWithoutClubsInput>
    create: XOR<CountryCreateWithoutClubsInput, CountryUncheckedCreateWithoutClubsInput>
    where?: CountryWhereInput
  }

  export type CountryUpdateToOneWithWhereWithoutClubsInput = {
    where?: CountryWhereInput
    data: XOR<CountryUpdateWithoutClubsInput, CountryUncheckedUpdateWithoutClubsInput>
  }

  export type CountryUpdateWithoutClubsInput = {
    iso2?: StringFieldUpdateOperationsInput | string
    countryName?: StringFieldUpdateOperationsInput | string
  }

  export type CountryUncheckedUpdateWithoutClubsInput = {
    id?: IntFieldUpdateOperationsInput | number
    iso2?: StringFieldUpdateOperationsInput | string
    countryName?: StringFieldUpdateOperationsInput | string
  }

  export type CenterUpsertWithWhereUniqueWithoutClubInput = {
    where: CenterWhereUniqueInput
    update: XOR<CenterUpdateWithoutClubInput, CenterUncheckedUpdateWithoutClubInput>
    create: XOR<CenterCreateWithoutClubInput, CenterUncheckedCreateWithoutClubInput>
  }

  export type CenterUpdateWithWhereUniqueWithoutClubInput = {
    where: CenterWhereUniqueInput
    data: XOR<CenterUpdateWithoutClubInput, CenterUncheckedUpdateWithoutClubInput>
  }

  export type CenterUpdateManyWithWhereWithoutClubInput = {
    where: CenterScalarWhereInput
    data: XOR<CenterUpdateManyMutationInput, CenterUncheckedUpdateManyWithoutClubInput>
  }

  export type CenterScalarWhereInput = {
    AND?: CenterScalarWhereInput | CenterScalarWhereInput[]
    OR?: CenterScalarWhereInput[]
    NOT?: CenterScalarWhereInput | CenterScalarWhereInput[]
    id?: IntFilter<"Center"> | number
    centerName?: StringFilter<"Center"> | string
    address?: StringFilter<"Center"> | string
    city?: StringFilter<"Center"> | string
    postcode?: StringFilter<"Center"> | string
    clubId?: IntFilter<"Center"> | number
  }

  export type ClubCreateWithoutCentersInput = {
    clubName: string
    country: CountryCreateNestedOneWithoutClubsInput
  }

  export type ClubUncheckedCreateWithoutCentersInput = {
    id?: number
    clubName: string
    countryId: number
  }

  export type ClubCreateOrConnectWithoutCentersInput = {
    where: ClubWhereUniqueInput
    create: XOR<ClubCreateWithoutCentersInput, ClubUncheckedCreateWithoutCentersInput>
  }

  export type ClubUpsertWithoutCentersInput = {
    update: XOR<ClubUpdateWithoutCentersInput, ClubUncheckedUpdateWithoutCentersInput>
    create: XOR<ClubCreateWithoutCentersInput, ClubUncheckedCreateWithoutCentersInput>
    where?: ClubWhereInput
  }

  export type ClubUpdateToOneWithWhereWithoutCentersInput = {
    where?: ClubWhereInput
    data: XOR<ClubUpdateWithoutCentersInput, ClubUncheckedUpdateWithoutCentersInput>
  }

  export type ClubUpdateWithoutCentersInput = {
    clubName?: StringFieldUpdateOperationsInput | string
    country?: CountryUpdateOneRequiredWithoutClubsNestedInput
  }

  export type ClubUncheckedUpdateWithoutCentersInput = {
    id?: IntFieldUpdateOperationsInput | number
    clubName?: StringFieldUpdateOperationsInput | string
    countryId?: IntFieldUpdateOperationsInput | number
  }

  export type ClubCreateManyCountryInput = {
    id?: number
    clubName: string
  }

  export type ClubUpdateWithoutCountryInput = {
    clubName?: StringFieldUpdateOperationsInput | string
    centers?: CenterUpdateManyWithoutClubNestedInput
  }

  export type ClubUncheckedUpdateWithoutCountryInput = {
    id?: IntFieldUpdateOperationsInput | number
    clubName?: StringFieldUpdateOperationsInput | string
    centers?: CenterUncheckedUpdateManyWithoutClubNestedInput
  }

  export type ClubUncheckedUpdateManyWithoutCountryInput = {
    id?: IntFieldUpdateOperationsInput | number
    clubName?: StringFieldUpdateOperationsInput | string
  }

  export type CenterCreateManyClubInput = {
    id?: number
    centerName: string
    address: string
    city: string
    postcode: string
  }

  export type CenterUpdateWithoutClubInput = {
    centerName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postcode?: StringFieldUpdateOperationsInput | string
  }

  export type CenterUncheckedUpdateWithoutClubInput = {
    id?: IntFieldUpdateOperationsInput | number
    centerName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postcode?: StringFieldUpdateOperationsInput | string
  }

  export type CenterUncheckedUpdateManyWithoutClubInput = {
    id?: IntFieldUpdateOperationsInput | number
    centerName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postcode?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}