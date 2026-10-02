
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model License
 * 
 */
export type License = $Result.DefaultSelection<Prisma.$LicensePayload>
/**
 * Model Installation
 * 
 */
export type Installation = $Result.DefaultSelection<Prisma.$InstallationPayload>
/**
 * Model LicenseEvent
 * 
 */
export type LicenseEvent = $Result.DefaultSelection<Prisma.$LicenseEventPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const LicenseType: {
  TRIAL: 'TRIAL',
  MONTHLY: 'MONTHLY',
  YEARLY: 'YEARLY',
  PERPETUAL: 'PERPETUAL'
};

export type LicenseType = (typeof LicenseType)[keyof typeof LicenseType]


export const LicenseStatus: {
  ACTIVE: 'ACTIVE',
  SUSPENDED: 'SUSPENDED',
  REVOKED: 'REVOKED',
  EXPIRED: 'EXPIRED'
};

export type LicenseStatus = (typeof LicenseStatus)[keyof typeof LicenseStatus]


export const InstallationStatus: {
  ACTIVE: 'ACTIVE',
  DEACTIVATED: 'DEACTIVATED',
  BLOCKED: 'BLOCKED'
};

export type InstallationStatus = (typeof InstallationStatus)[keyof typeof InstallationStatus]


export const LicenseEventType: {
  CREATED: 'CREATED',
  ACTIVATED: 'ACTIVATED',
  VALIDATED: 'VALIDATED',
  DEACTIVATED: 'DEACTIVATED',
  SUSPENDED: 'SUSPENDED',
  REVOKED: 'REVOKED',
  EXPIRED: 'EXPIRED'
};

export type LicenseEventType = (typeof LicenseEventType)[keyof typeof LicenseEventType]

}

export type LicenseType = $Enums.LicenseType

export const LicenseType: typeof $Enums.LicenseType

export type LicenseStatus = $Enums.LicenseStatus

export const LicenseStatus: typeof $Enums.LicenseStatus

export type InstallationStatus = $Enums.InstallationStatus

export const InstallationStatus: typeof $Enums.InstallationStatus

export type LicenseEventType = $Enums.LicenseEventType

export const LicenseEventType: typeof $Enums.LicenseEventType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Admins
 * const admins = await prisma.admin.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Admins
   * const admins = await prisma.admin.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.license`: Exposes CRUD operations for the **License** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Licenses
    * const licenses = await prisma.license.findMany()
    * ```
    */
  get license(): Prisma.LicenseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.installation`: Exposes CRUD operations for the **Installation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Installations
    * const installations = await prisma.installation.findMany()
    * ```
    */
  get installation(): Prisma.InstallationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.licenseEvent`: Exposes CRUD operations for the **LicenseEvent** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LicenseEvents
    * const licenseEvents = await prisma.licenseEvent.findMany()
    * ```
    */
  get licenseEvent(): Prisma.LicenseEventDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.10.0
   * Query Engine version: 0edf323efd1d98336f3f0a68684b56f689b900d3
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

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
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
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
    Admin: 'Admin',
    Customer: 'Customer',
    Product: 'Product',
    License: 'License',
    Installation: 'Installation',
    LicenseEvent: 'LicenseEvent'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "admin" | "customer" | "product" | "license" | "installation" | "licenseEvent"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      Customer: {
        payload: Prisma.$CustomerPayload<ExtArgs>
        fields: Prisma.CustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findFirst: {
            args: Prisma.CustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findMany: {
            args: Prisma.CustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          create: {
            args: Prisma.CustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          createMany: {
            args: Prisma.CustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          delete: {
            args: Prisma.CustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          update: {
            args: Prisma.CustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CustomerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          upsert: {
            args: Prisma.CustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.CustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      License: {
        payload: Prisma.$LicensePayload<ExtArgs>
        fields: Prisma.LicenseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LicenseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LicenseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload>
          }
          findFirst: {
            args: Prisma.LicenseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LicenseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload>
          }
          findMany: {
            args: Prisma.LicenseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload>[]
          }
          create: {
            args: Prisma.LicenseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload>
          }
          createMany: {
            args: Prisma.LicenseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LicenseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload>[]
          }
          delete: {
            args: Prisma.LicenseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload>
          }
          update: {
            args: Prisma.LicenseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload>
          }
          deleteMany: {
            args: Prisma.LicenseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LicenseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LicenseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload>[]
          }
          upsert: {
            args: Prisma.LicenseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicensePayload>
          }
          aggregate: {
            args: Prisma.LicenseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLicense>
          }
          groupBy: {
            args: Prisma.LicenseGroupByArgs<ExtArgs>
            result: $Utils.Optional<LicenseGroupByOutputType>[]
          }
          count: {
            args: Prisma.LicenseCountArgs<ExtArgs>
            result: $Utils.Optional<LicenseCountAggregateOutputType> | number
          }
        }
      }
      Installation: {
        payload: Prisma.$InstallationPayload<ExtArgs>
        fields: Prisma.InstallationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InstallationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstallationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InstallationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstallationPayload>
          }
          findFirst: {
            args: Prisma.InstallationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstallationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InstallationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstallationPayload>
          }
          findMany: {
            args: Prisma.InstallationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstallationPayload>[]
          }
          create: {
            args: Prisma.InstallationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstallationPayload>
          }
          createMany: {
            args: Prisma.InstallationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InstallationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstallationPayload>[]
          }
          delete: {
            args: Prisma.InstallationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstallationPayload>
          }
          update: {
            args: Prisma.InstallationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstallationPayload>
          }
          deleteMany: {
            args: Prisma.InstallationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InstallationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InstallationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstallationPayload>[]
          }
          upsert: {
            args: Prisma.InstallationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InstallationPayload>
          }
          aggregate: {
            args: Prisma.InstallationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInstallation>
          }
          groupBy: {
            args: Prisma.InstallationGroupByArgs<ExtArgs>
            result: $Utils.Optional<InstallationGroupByOutputType>[]
          }
          count: {
            args: Prisma.InstallationCountArgs<ExtArgs>
            result: $Utils.Optional<InstallationCountAggregateOutputType> | number
          }
        }
      }
      LicenseEvent: {
        payload: Prisma.$LicenseEventPayload<ExtArgs>
        fields: Prisma.LicenseEventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LicenseEventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseEventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LicenseEventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseEventPayload>
          }
          findFirst: {
            args: Prisma.LicenseEventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseEventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LicenseEventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseEventPayload>
          }
          findMany: {
            args: Prisma.LicenseEventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseEventPayload>[]
          }
          create: {
            args: Prisma.LicenseEventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseEventPayload>
          }
          createMany: {
            args: Prisma.LicenseEventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LicenseEventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseEventPayload>[]
          }
          delete: {
            args: Prisma.LicenseEventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseEventPayload>
          }
          update: {
            args: Prisma.LicenseEventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseEventPayload>
          }
          deleteMany: {
            args: Prisma.LicenseEventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LicenseEventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LicenseEventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseEventPayload>[]
          }
          upsert: {
            args: Prisma.LicenseEventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LicenseEventPayload>
          }
          aggregate: {
            args: Prisma.LicenseEventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLicenseEvent>
          }
          groupBy: {
            args: Prisma.LicenseEventGroupByArgs<ExtArgs>
            result: $Utils.Optional<LicenseEventGroupByOutputType>[]
          }
          count: {
            args: Prisma.LicenseEventCountArgs<ExtArgs>
            result: $Utils.Optional<LicenseEventCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    admin?: AdminOmit
    customer?: CustomerOmit
    product?: ProductOmit
    license?: LicenseOmit
    installation?: InstallationOmit
    licenseEvent?: LicenseEventOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    licenses: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    licenses?: boolean | CustomerCountOutputTypeCountLicensesArgs
  }

  // Custom InputTypes
  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountLicensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LicenseWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    licenses: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    licenses?: boolean | ProductCountOutputTypeCountLicensesArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountLicensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LicenseWhereInput
  }


  /**
   * Count Type LicenseCountOutputType
   */

  export type LicenseCountOutputType = {
    installations: number
    events: number
  }

  export type LicenseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    installations?: boolean | LicenseCountOutputTypeCountInstallationsArgs
    events?: boolean | LicenseCountOutputTypeCountEventsArgs
  }

  // Custom InputTypes
  /**
   * LicenseCountOutputType without action
   */
  export type LicenseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseCountOutputType
     */
    select?: LicenseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LicenseCountOutputType without action
   */
  export type LicenseCountOutputTypeCountInstallationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InstallationWhereInput
  }

  /**
   * LicenseCountOutputType without action
   */
  export type LicenseCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LicenseEventWhereInput
  }


  /**
   * Count Type InstallationCountOutputType
   */

  export type InstallationCountOutputType = {
    events: number
  }

  export type InstallationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | InstallationCountOutputTypeCountEventsArgs
  }

  // Custom InputTypes
  /**
   * InstallationCountOutputType without action
   */
  export type InstallationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the InstallationCountOutputType
     */
    select?: InstallationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * InstallationCountOutputType without action
   */
  export type InstallationCountOutputTypeCountEventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LicenseEventWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    passwordHash: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    passwordHash: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    name: number
    email: number
    passwordHash: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdminMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: string
    name: string
    email: string
    passwordHash: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "passwordHash" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["admin"]>

  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      passwordHash: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Admins and returns the data saved in the database.
     * @param {AdminCreateManyAndReturnArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins and returns the data updated in the database.
     * @param {AdminUpdateManyAndReturnArgs} args - Arguments to update many Admins.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.updateManyAndReturn({
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
    updateManyAndReturn<T extends AdminUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
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
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Admin model
   */
  interface AdminFieldRefs {
    readonly id: FieldRef<"Admin", 'String'>
    readonly name: FieldRef<"Admin", 'String'>
    readonly email: FieldRef<"Admin", 'String'>
    readonly passwordHash: FieldRef<"Admin", 'String'>
    readonly isActive: FieldRef<"Admin", 'Boolean'>
    readonly createdAt: FieldRef<"Admin", 'DateTime'>
    readonly updatedAt: FieldRef<"Admin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin createManyAndReturn
   */
  export type AdminCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin updateManyAndReturn
   */
  export type AdminUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
    /**
     * Limit how many Admins to delete.
     */
    limit?: number
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
  }


  /**
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    company: string | null
    address: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    company: string | null
    address: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    company: number
    address: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CustomerMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    company?: true
    address?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    company?: true
    address?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    company?: true
    address?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithAggregationInput | CustomerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    id: string
    name: string
    email: string | null
    phone: string | null
    company: string | null
    address: string | null
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: CustomerCountAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    company?: boolean
    address?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    licenses?: boolean | Customer$licensesArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    company?: boolean
    address?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    company?: boolean
    address?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    company?: boolean
    address?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CustomerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "phone" | "company" | "address" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["customer"]>
  export type CustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    licenses?: boolean | Customer$licensesArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CustomerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CustomerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {
      licenses: Prisma.$LicensePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string | null
      phone: string | null
      company: string | null
      address: string | null
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = $Result.GetResult<Prisma.$CustomerPayload, S>

  type CustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer'], meta: { name: 'Customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerFindUniqueArgs>(args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerFindFirstArgs>(args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerFindManyArgs>(args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
     */
    create<T extends CustomerCreateArgs>(args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customers.
     * @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerCreateManyArgs>(args?: SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customers and returns the data saved in the database.
     * @param {CustomerCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
     */
    delete<T extends CustomerDeleteArgs>(args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerUpdateArgs>(args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerDeleteManyArgs>(args?: SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerUpdateManyArgs>(args: SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers and returns the data updated in the database.
     * @param {CustomerUpdateManyAndReturnArgs} args - Arguments to update many Customers.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.updateManyAndReturn({
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
    updateManyAndReturn<T extends CustomerUpdateManyAndReturnArgs>(args: SelectSubset<T, CustomerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     */
    upsert<T extends CustomerUpsertArgs>(args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
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
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer model
   */
  readonly fields: CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    licenses<T extends Customer$licensesArgs<ExtArgs> = {}>(args?: Subset<T, Customer$licensesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Customer model
   */
  interface CustomerFieldRefs {
    readonly id: FieldRef<"Customer", 'String'>
    readonly name: FieldRef<"Customer", 'String'>
    readonly email: FieldRef<"Customer", 'String'>
    readonly phone: FieldRef<"Customer", 'String'>
    readonly company: FieldRef<"Customer", 'String'>
    readonly address: FieldRef<"Customer", 'String'>
    readonly notes: FieldRef<"Customer", 'String'>
    readonly createdAt: FieldRef<"Customer", 'DateTime'>
    readonly updatedAt: FieldRef<"Customer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer create
   */
  export type CustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }

  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer createManyAndReturn
   */
  export type CustomerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer update
   */
  export type CustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer updateManyAndReturn
   */
  export type CustomerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }

  /**
   * Customer delete
   */
  export type CustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to delete.
     */
    limit?: number
  }

  /**
   * Customer.licenses
   */
  export type Customer$licensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
    where?: LicenseWhereInput
    orderBy?: LicenseOrderByWithRelationInput | LicenseOrderByWithRelationInput[]
    cursor?: LicenseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LicenseScalarFieldEnum | LicenseScalarFieldEnum[]
  }

  /**
   * Customer without action
   */
  export type CustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductMinAggregateOutputType = {
    id: string | null
    name: string | null
    code: string | null
    description: string | null
    version: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: string | null
    name: string | null
    code: string | null
    description: string | null
    version: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    name: number
    code: number
    description: number
    version: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductMinAggregateInputType = {
    id?: true
    name?: true
    code?: true
    description?: true
    version?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    name?: true
    code?: true
    description?: true
    version?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    name?: true
    code?: true
    description?: true
    version?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: string
    name: string
    code: string
    description: string | null
    version: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: ProductCountAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    description?: boolean
    version?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    licenses?: boolean | Product$licensesArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    description?: boolean
    version?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["product"]>

  export type ProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    code?: boolean
    description?: boolean
    version?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    name?: boolean
    code?: boolean
    description?: boolean
    version?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "code" | "description" | "version" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    licenses?: boolean | Product$licensesArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      licenses: Prisma.$LicensePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      code: string
      description: string | null
      version: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productWithIdOnly = await prisma.product.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
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
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    licenses<T extends Product$licensesArgs<ExtArgs> = {}>(args?: Subset<T, Product$licensesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'String'>
    readonly name: FieldRef<"Product", 'String'>
    readonly code: FieldRef<"Product", 'String'>
    readonly description: FieldRef<"Product", 'String'>
    readonly version: FieldRef<"Product", 'String'>
    readonly isActive: FieldRef<"Product", 'Boolean'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly updatedAt: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.licenses
   */
  export type Product$licensesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
    where?: LicenseWhereInput
    orderBy?: LicenseOrderByWithRelationInput | LicenseOrderByWithRelationInput[]
    cursor?: LicenseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LicenseScalarFieldEnum | LicenseScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model License
   */

  export type AggregateLicense = {
    _count: LicenseCountAggregateOutputType | null
    _avg: LicenseAvgAggregateOutputType | null
    _sum: LicenseSumAggregateOutputType | null
    _min: LicenseMinAggregateOutputType | null
    _max: LicenseMaxAggregateOutputType | null
  }

  export type LicenseAvgAggregateOutputType = {
    maxInstallations: number | null
  }

  export type LicenseSumAggregateOutputType = {
    maxInstallations: number | null
  }

  export type LicenseMinAggregateOutputType = {
    id: string | null
    licenseKey: string | null
    type: $Enums.LicenseType | null
    status: $Enums.LicenseStatus | null
    issuedAt: Date | null
    expiresAt: Date | null
    maxInstallations: number | null
    customerId: string | null
    productId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LicenseMaxAggregateOutputType = {
    id: string | null
    licenseKey: string | null
    type: $Enums.LicenseType | null
    status: $Enums.LicenseStatus | null
    issuedAt: Date | null
    expiresAt: Date | null
    maxInstallations: number | null
    customerId: string | null
    productId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type LicenseCountAggregateOutputType = {
    id: number
    licenseKey: number
    type: number
    status: number
    issuedAt: number
    expiresAt: number
    maxInstallations: number
    customerId: number
    productId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type LicenseAvgAggregateInputType = {
    maxInstallations?: true
  }

  export type LicenseSumAggregateInputType = {
    maxInstallations?: true
  }

  export type LicenseMinAggregateInputType = {
    id?: true
    licenseKey?: true
    type?: true
    status?: true
    issuedAt?: true
    expiresAt?: true
    maxInstallations?: true
    customerId?: true
    productId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LicenseMaxAggregateInputType = {
    id?: true
    licenseKey?: true
    type?: true
    status?: true
    issuedAt?: true
    expiresAt?: true
    maxInstallations?: true
    customerId?: true
    productId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type LicenseCountAggregateInputType = {
    id?: true
    licenseKey?: true
    type?: true
    status?: true
    issuedAt?: true
    expiresAt?: true
    maxInstallations?: true
    customerId?: true
    productId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type LicenseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which License to aggregate.
     */
    where?: LicenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Licenses to fetch.
     */
    orderBy?: LicenseOrderByWithRelationInput | LicenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LicenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Licenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Licenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Licenses
    **/
    _count?: true | LicenseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LicenseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LicenseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LicenseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LicenseMaxAggregateInputType
  }

  export type GetLicenseAggregateType<T extends LicenseAggregateArgs> = {
        [P in keyof T & keyof AggregateLicense]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLicense[P]>
      : GetScalarType<T[P], AggregateLicense[P]>
  }




  export type LicenseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LicenseWhereInput
    orderBy?: LicenseOrderByWithAggregationInput | LicenseOrderByWithAggregationInput[]
    by: LicenseScalarFieldEnum[] | LicenseScalarFieldEnum
    having?: LicenseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LicenseCountAggregateInputType | true
    _avg?: LicenseAvgAggregateInputType
    _sum?: LicenseSumAggregateInputType
    _min?: LicenseMinAggregateInputType
    _max?: LicenseMaxAggregateInputType
  }

  export type LicenseGroupByOutputType = {
    id: string
    licenseKey: string
    type: $Enums.LicenseType
    status: $Enums.LicenseStatus
    issuedAt: Date
    expiresAt: Date | null
    maxInstallations: number
    customerId: string
    productId: string
    createdAt: Date
    updatedAt: Date
    _count: LicenseCountAggregateOutputType | null
    _avg: LicenseAvgAggregateOutputType | null
    _sum: LicenseSumAggregateOutputType | null
    _min: LicenseMinAggregateOutputType | null
    _max: LicenseMaxAggregateOutputType | null
  }

  type GetLicenseGroupByPayload<T extends LicenseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LicenseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LicenseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LicenseGroupByOutputType[P]>
            : GetScalarType<T[P], LicenseGroupByOutputType[P]>
        }
      >
    >


  export type LicenseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    licenseKey?: boolean
    type?: boolean
    status?: boolean
    issuedAt?: boolean
    expiresAt?: boolean
    maxInstallations?: boolean
    customerId?: boolean
    productId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
    installations?: boolean | License$installationsArgs<ExtArgs>
    events?: boolean | License$eventsArgs<ExtArgs>
    _count?: boolean | LicenseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["license"]>

  export type LicenseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    licenseKey?: boolean
    type?: boolean
    status?: boolean
    issuedAt?: boolean
    expiresAt?: boolean
    maxInstallations?: boolean
    customerId?: boolean
    productId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["license"]>

  export type LicenseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    licenseKey?: boolean
    type?: boolean
    status?: boolean
    issuedAt?: boolean
    expiresAt?: boolean
    maxInstallations?: boolean
    customerId?: boolean
    productId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["license"]>

  export type LicenseSelectScalar = {
    id?: boolean
    licenseKey?: boolean
    type?: boolean
    status?: boolean
    issuedAt?: boolean
    expiresAt?: boolean
    maxInstallations?: boolean
    customerId?: boolean
    productId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type LicenseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "licenseKey" | "type" | "status" | "issuedAt" | "expiresAt" | "maxInstallations" | "customerId" | "productId" | "createdAt" | "updatedAt", ExtArgs["result"]["license"]>
  export type LicenseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
    installations?: boolean | License$installationsArgs<ExtArgs>
    events?: boolean | License$eventsArgs<ExtArgs>
    _count?: boolean | LicenseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LicenseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type LicenseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $LicensePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "License"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
      installations: Prisma.$InstallationPayload<ExtArgs>[]
      events: Prisma.$LicenseEventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      licenseKey: string
      type: $Enums.LicenseType
      status: $Enums.LicenseStatus
      issuedAt: Date
      expiresAt: Date | null
      maxInstallations: number
      customerId: string
      productId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["license"]>
    composites: {}
  }

  type LicenseGetPayload<S extends boolean | null | undefined | LicenseDefaultArgs> = $Result.GetResult<Prisma.$LicensePayload, S>

  type LicenseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LicenseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LicenseCountAggregateInputType | true
    }

  export interface LicenseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['License'], meta: { name: 'License' } }
    /**
     * Find zero or one License that matches the filter.
     * @param {LicenseFindUniqueArgs} args - Arguments to find a License
     * @example
     * // Get one License
     * const license = await prisma.license.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LicenseFindUniqueArgs>(args: SelectSubset<T, LicenseFindUniqueArgs<ExtArgs>>): Prisma__LicenseClient<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one License that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LicenseFindUniqueOrThrowArgs} args - Arguments to find a License
     * @example
     * // Get one License
     * const license = await prisma.license.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LicenseFindUniqueOrThrowArgs>(args: SelectSubset<T, LicenseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LicenseClient<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first License that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseFindFirstArgs} args - Arguments to find a License
     * @example
     * // Get one License
     * const license = await prisma.license.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LicenseFindFirstArgs>(args?: SelectSubset<T, LicenseFindFirstArgs<ExtArgs>>): Prisma__LicenseClient<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first License that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseFindFirstOrThrowArgs} args - Arguments to find a License
     * @example
     * // Get one License
     * const license = await prisma.license.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LicenseFindFirstOrThrowArgs>(args?: SelectSubset<T, LicenseFindFirstOrThrowArgs<ExtArgs>>): Prisma__LicenseClient<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Licenses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Licenses
     * const licenses = await prisma.license.findMany()
     * 
     * // Get first 10 Licenses
     * const licenses = await prisma.license.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const licenseWithIdOnly = await prisma.license.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LicenseFindManyArgs>(args?: SelectSubset<T, LicenseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a License.
     * @param {LicenseCreateArgs} args - Arguments to create a License.
     * @example
     * // Create one License
     * const License = await prisma.license.create({
     *   data: {
     *     // ... data to create a License
     *   }
     * })
     * 
     */
    create<T extends LicenseCreateArgs>(args: SelectSubset<T, LicenseCreateArgs<ExtArgs>>): Prisma__LicenseClient<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Licenses.
     * @param {LicenseCreateManyArgs} args - Arguments to create many Licenses.
     * @example
     * // Create many Licenses
     * const license = await prisma.license.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LicenseCreateManyArgs>(args?: SelectSubset<T, LicenseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Licenses and returns the data saved in the database.
     * @param {LicenseCreateManyAndReturnArgs} args - Arguments to create many Licenses.
     * @example
     * // Create many Licenses
     * const license = await prisma.license.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Licenses and only return the `id`
     * const licenseWithIdOnly = await prisma.license.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LicenseCreateManyAndReturnArgs>(args?: SelectSubset<T, LicenseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a License.
     * @param {LicenseDeleteArgs} args - Arguments to delete one License.
     * @example
     * // Delete one License
     * const License = await prisma.license.delete({
     *   where: {
     *     // ... filter to delete one License
     *   }
     * })
     * 
     */
    delete<T extends LicenseDeleteArgs>(args: SelectSubset<T, LicenseDeleteArgs<ExtArgs>>): Prisma__LicenseClient<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one License.
     * @param {LicenseUpdateArgs} args - Arguments to update one License.
     * @example
     * // Update one License
     * const license = await prisma.license.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LicenseUpdateArgs>(args: SelectSubset<T, LicenseUpdateArgs<ExtArgs>>): Prisma__LicenseClient<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Licenses.
     * @param {LicenseDeleteManyArgs} args - Arguments to filter Licenses to delete.
     * @example
     * // Delete a few Licenses
     * const { count } = await prisma.license.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LicenseDeleteManyArgs>(args?: SelectSubset<T, LicenseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Licenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Licenses
     * const license = await prisma.license.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LicenseUpdateManyArgs>(args: SelectSubset<T, LicenseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Licenses and returns the data updated in the database.
     * @param {LicenseUpdateManyAndReturnArgs} args - Arguments to update many Licenses.
     * @example
     * // Update many Licenses
     * const license = await prisma.license.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Licenses and only return the `id`
     * const licenseWithIdOnly = await prisma.license.updateManyAndReturn({
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
    updateManyAndReturn<T extends LicenseUpdateManyAndReturnArgs>(args: SelectSubset<T, LicenseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one License.
     * @param {LicenseUpsertArgs} args - Arguments to update or create a License.
     * @example
     * // Update or create a License
     * const license = await prisma.license.upsert({
     *   create: {
     *     // ... data to create a License
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the License we want to update
     *   }
     * })
     */
    upsert<T extends LicenseUpsertArgs>(args: SelectSubset<T, LicenseUpsertArgs<ExtArgs>>): Prisma__LicenseClient<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Licenses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseCountArgs} args - Arguments to filter Licenses to count.
     * @example
     * // Count the number of Licenses
     * const count = await prisma.license.count({
     *   where: {
     *     // ... the filter for the Licenses we want to count
     *   }
     * })
    **/
    count<T extends LicenseCountArgs>(
      args?: Subset<T, LicenseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LicenseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a License.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LicenseAggregateArgs>(args: Subset<T, LicenseAggregateArgs>): Prisma.PrismaPromise<GetLicenseAggregateType<T>>

    /**
     * Group by License.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseGroupByArgs} args - Group by arguments.
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
      T extends LicenseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LicenseGroupByArgs['orderBy'] }
        : { orderBy?: LicenseGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LicenseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLicenseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the License model
   */
  readonly fields: LicenseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for License.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LicenseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    installations<T extends License$installationsArgs<ExtArgs> = {}>(args?: Subset<T, License$installationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstallationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    events<T extends License$eventsArgs<ExtArgs> = {}>(args?: Subset<T, License$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LicenseEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the License model
   */
  interface LicenseFieldRefs {
    readonly id: FieldRef<"License", 'String'>
    readonly licenseKey: FieldRef<"License", 'String'>
    readonly type: FieldRef<"License", 'LicenseType'>
    readonly status: FieldRef<"License", 'LicenseStatus'>
    readonly issuedAt: FieldRef<"License", 'DateTime'>
    readonly expiresAt: FieldRef<"License", 'DateTime'>
    readonly maxInstallations: FieldRef<"License", 'Int'>
    readonly customerId: FieldRef<"License", 'String'>
    readonly productId: FieldRef<"License", 'String'>
    readonly createdAt: FieldRef<"License", 'DateTime'>
    readonly updatedAt: FieldRef<"License", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * License findUnique
   */
  export type LicenseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
    /**
     * Filter, which License to fetch.
     */
    where: LicenseWhereUniqueInput
  }

  /**
   * License findUniqueOrThrow
   */
  export type LicenseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
    /**
     * Filter, which License to fetch.
     */
    where: LicenseWhereUniqueInput
  }

  /**
   * License findFirst
   */
  export type LicenseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
    /**
     * Filter, which License to fetch.
     */
    where?: LicenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Licenses to fetch.
     */
    orderBy?: LicenseOrderByWithRelationInput | LicenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Licenses.
     */
    cursor?: LicenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Licenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Licenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Licenses.
     */
    distinct?: LicenseScalarFieldEnum | LicenseScalarFieldEnum[]
  }

  /**
   * License findFirstOrThrow
   */
  export type LicenseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
    /**
     * Filter, which License to fetch.
     */
    where?: LicenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Licenses to fetch.
     */
    orderBy?: LicenseOrderByWithRelationInput | LicenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Licenses.
     */
    cursor?: LicenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Licenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Licenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Licenses.
     */
    distinct?: LicenseScalarFieldEnum | LicenseScalarFieldEnum[]
  }

  /**
   * License findMany
   */
  export type LicenseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
    /**
     * Filter, which Licenses to fetch.
     */
    where?: LicenseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Licenses to fetch.
     */
    orderBy?: LicenseOrderByWithRelationInput | LicenseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Licenses.
     */
    cursor?: LicenseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Licenses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Licenses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Licenses.
     */
    distinct?: LicenseScalarFieldEnum | LicenseScalarFieldEnum[]
  }

  /**
   * License create
   */
  export type LicenseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
    /**
     * The data needed to create a License.
     */
    data: XOR<LicenseCreateInput, LicenseUncheckedCreateInput>
  }

  /**
   * License createMany
   */
  export type LicenseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Licenses.
     */
    data: LicenseCreateManyInput | LicenseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * License createManyAndReturn
   */
  export type LicenseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * The data used to create many Licenses.
     */
    data: LicenseCreateManyInput | LicenseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * License update
   */
  export type LicenseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
    /**
     * The data needed to update a License.
     */
    data: XOR<LicenseUpdateInput, LicenseUncheckedUpdateInput>
    /**
     * Choose, which License to update.
     */
    where: LicenseWhereUniqueInput
  }

  /**
   * License updateMany
   */
  export type LicenseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Licenses.
     */
    data: XOR<LicenseUpdateManyMutationInput, LicenseUncheckedUpdateManyInput>
    /**
     * Filter which Licenses to update
     */
    where?: LicenseWhereInput
    /**
     * Limit how many Licenses to update.
     */
    limit?: number
  }

  /**
   * License updateManyAndReturn
   */
  export type LicenseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * The data used to update Licenses.
     */
    data: XOR<LicenseUpdateManyMutationInput, LicenseUncheckedUpdateManyInput>
    /**
     * Filter which Licenses to update
     */
    where?: LicenseWhereInput
    /**
     * Limit how many Licenses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * License upsert
   */
  export type LicenseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
    /**
     * The filter to search for the License to update in case it exists.
     */
    where: LicenseWhereUniqueInput
    /**
     * In case the License found by the `where` argument doesn't exist, create a new License with this data.
     */
    create: XOR<LicenseCreateInput, LicenseUncheckedCreateInput>
    /**
     * In case the License was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LicenseUpdateInput, LicenseUncheckedUpdateInput>
  }

  /**
   * License delete
   */
  export type LicenseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
    /**
     * Filter which License to delete.
     */
    where: LicenseWhereUniqueInput
  }

  /**
   * License deleteMany
   */
  export type LicenseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Licenses to delete
     */
    where?: LicenseWhereInput
    /**
     * Limit how many Licenses to delete.
     */
    limit?: number
  }

  /**
   * License.installations
   */
  export type License$installationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Installation
     */
    select?: InstallationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Installation
     */
    omit?: InstallationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstallationInclude<ExtArgs> | null
    where?: InstallationWhereInput
    orderBy?: InstallationOrderByWithRelationInput | InstallationOrderByWithRelationInput[]
    cursor?: InstallationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InstallationScalarFieldEnum | InstallationScalarFieldEnum[]
  }

  /**
   * License.events
   */
  export type License$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseEvent
     */
    select?: LicenseEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LicenseEvent
     */
    omit?: LicenseEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseEventInclude<ExtArgs> | null
    where?: LicenseEventWhereInput
    orderBy?: LicenseEventOrderByWithRelationInput | LicenseEventOrderByWithRelationInput[]
    cursor?: LicenseEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LicenseEventScalarFieldEnum | LicenseEventScalarFieldEnum[]
  }

  /**
   * License without action
   */
  export type LicenseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the License
     */
    select?: LicenseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the License
     */
    omit?: LicenseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseInclude<ExtArgs> | null
  }


  /**
   * Model Installation
   */

  export type AggregateInstallation = {
    _count: InstallationCountAggregateOutputType | null
    _min: InstallationMinAggregateOutputType | null
    _max: InstallationMaxAggregateOutputType | null
  }

  export type InstallationMinAggregateOutputType = {
    id: string | null
    licenseId: string | null
    machineId: string | null
    deviceName: string | null
    operatingSystem: string | null
    appVersion: string | null
    activatedAt: Date | null
    lastSeenAt: Date | null
    deactivatedAt: Date | null
    status: $Enums.InstallationStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InstallationMaxAggregateOutputType = {
    id: string | null
    licenseId: string | null
    machineId: string | null
    deviceName: string | null
    operatingSystem: string | null
    appVersion: string | null
    activatedAt: Date | null
    lastSeenAt: Date | null
    deactivatedAt: Date | null
    status: $Enums.InstallationStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InstallationCountAggregateOutputType = {
    id: number
    licenseId: number
    machineId: number
    deviceName: number
    operatingSystem: number
    appVersion: number
    activatedAt: number
    lastSeenAt: number
    deactivatedAt: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InstallationMinAggregateInputType = {
    id?: true
    licenseId?: true
    machineId?: true
    deviceName?: true
    operatingSystem?: true
    appVersion?: true
    activatedAt?: true
    lastSeenAt?: true
    deactivatedAt?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InstallationMaxAggregateInputType = {
    id?: true
    licenseId?: true
    machineId?: true
    deviceName?: true
    operatingSystem?: true
    appVersion?: true
    activatedAt?: true
    lastSeenAt?: true
    deactivatedAt?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InstallationCountAggregateInputType = {
    id?: true
    licenseId?: true
    machineId?: true
    deviceName?: true
    operatingSystem?: true
    appVersion?: true
    activatedAt?: true
    lastSeenAt?: true
    deactivatedAt?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InstallationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Installation to aggregate.
     */
    where?: InstallationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Installations to fetch.
     */
    orderBy?: InstallationOrderByWithRelationInput | InstallationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InstallationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Installations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Installations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Installations
    **/
    _count?: true | InstallationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InstallationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InstallationMaxAggregateInputType
  }

  export type GetInstallationAggregateType<T extends InstallationAggregateArgs> = {
        [P in keyof T & keyof AggregateInstallation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInstallation[P]>
      : GetScalarType<T[P], AggregateInstallation[P]>
  }




  export type InstallationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InstallationWhereInput
    orderBy?: InstallationOrderByWithAggregationInput | InstallationOrderByWithAggregationInput[]
    by: InstallationScalarFieldEnum[] | InstallationScalarFieldEnum
    having?: InstallationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InstallationCountAggregateInputType | true
    _min?: InstallationMinAggregateInputType
    _max?: InstallationMaxAggregateInputType
  }

  export type InstallationGroupByOutputType = {
    id: string
    licenseId: string
    machineId: string
    deviceName: string | null
    operatingSystem: string | null
    appVersion: string | null
    activatedAt: Date
    lastSeenAt: Date | null
    deactivatedAt: Date | null
    status: $Enums.InstallationStatus
    createdAt: Date
    updatedAt: Date
    _count: InstallationCountAggregateOutputType | null
    _min: InstallationMinAggregateOutputType | null
    _max: InstallationMaxAggregateOutputType | null
  }

  type GetInstallationGroupByPayload<T extends InstallationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InstallationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InstallationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InstallationGroupByOutputType[P]>
            : GetScalarType<T[P], InstallationGroupByOutputType[P]>
        }
      >
    >


  export type InstallationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    licenseId?: boolean
    machineId?: boolean
    deviceName?: boolean
    operatingSystem?: boolean
    appVersion?: boolean
    activatedAt?: boolean
    lastSeenAt?: boolean
    deactivatedAt?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    license?: boolean | LicenseDefaultArgs<ExtArgs>
    events?: boolean | Installation$eventsArgs<ExtArgs>
    _count?: boolean | InstallationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["installation"]>

  export type InstallationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    licenseId?: boolean
    machineId?: boolean
    deviceName?: boolean
    operatingSystem?: boolean
    appVersion?: boolean
    activatedAt?: boolean
    lastSeenAt?: boolean
    deactivatedAt?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    license?: boolean | LicenseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["installation"]>

  export type InstallationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    licenseId?: boolean
    machineId?: boolean
    deviceName?: boolean
    operatingSystem?: boolean
    appVersion?: boolean
    activatedAt?: boolean
    lastSeenAt?: boolean
    deactivatedAt?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    license?: boolean | LicenseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["installation"]>

  export type InstallationSelectScalar = {
    id?: boolean
    licenseId?: boolean
    machineId?: boolean
    deviceName?: boolean
    operatingSystem?: boolean
    appVersion?: boolean
    activatedAt?: boolean
    lastSeenAt?: boolean
    deactivatedAt?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type InstallationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "licenseId" | "machineId" | "deviceName" | "operatingSystem" | "appVersion" | "activatedAt" | "lastSeenAt" | "deactivatedAt" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["installation"]>
  export type InstallationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    license?: boolean | LicenseDefaultArgs<ExtArgs>
    events?: boolean | Installation$eventsArgs<ExtArgs>
    _count?: boolean | InstallationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type InstallationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    license?: boolean | LicenseDefaultArgs<ExtArgs>
  }
  export type InstallationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    license?: boolean | LicenseDefaultArgs<ExtArgs>
  }

  export type $InstallationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Installation"
    objects: {
      license: Prisma.$LicensePayload<ExtArgs>
      events: Prisma.$LicenseEventPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      licenseId: string
      machineId: string
      deviceName: string | null
      operatingSystem: string | null
      appVersion: string | null
      activatedAt: Date
      lastSeenAt: Date | null
      deactivatedAt: Date | null
      status: $Enums.InstallationStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["installation"]>
    composites: {}
  }

  type InstallationGetPayload<S extends boolean | null | undefined | InstallationDefaultArgs> = $Result.GetResult<Prisma.$InstallationPayload, S>

  type InstallationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InstallationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InstallationCountAggregateInputType | true
    }

  export interface InstallationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Installation'], meta: { name: 'Installation' } }
    /**
     * Find zero or one Installation that matches the filter.
     * @param {InstallationFindUniqueArgs} args - Arguments to find a Installation
     * @example
     * // Get one Installation
     * const installation = await prisma.installation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InstallationFindUniqueArgs>(args: SelectSubset<T, InstallationFindUniqueArgs<ExtArgs>>): Prisma__InstallationClient<$Result.GetResult<Prisma.$InstallationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Installation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InstallationFindUniqueOrThrowArgs} args - Arguments to find a Installation
     * @example
     * // Get one Installation
     * const installation = await prisma.installation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InstallationFindUniqueOrThrowArgs>(args: SelectSubset<T, InstallationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InstallationClient<$Result.GetResult<Prisma.$InstallationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Installation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstallationFindFirstArgs} args - Arguments to find a Installation
     * @example
     * // Get one Installation
     * const installation = await prisma.installation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InstallationFindFirstArgs>(args?: SelectSubset<T, InstallationFindFirstArgs<ExtArgs>>): Prisma__InstallationClient<$Result.GetResult<Prisma.$InstallationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Installation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstallationFindFirstOrThrowArgs} args - Arguments to find a Installation
     * @example
     * // Get one Installation
     * const installation = await prisma.installation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InstallationFindFirstOrThrowArgs>(args?: SelectSubset<T, InstallationFindFirstOrThrowArgs<ExtArgs>>): Prisma__InstallationClient<$Result.GetResult<Prisma.$InstallationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Installations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstallationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Installations
     * const installations = await prisma.installation.findMany()
     * 
     * // Get first 10 Installations
     * const installations = await prisma.installation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const installationWithIdOnly = await prisma.installation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InstallationFindManyArgs>(args?: SelectSubset<T, InstallationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstallationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Installation.
     * @param {InstallationCreateArgs} args - Arguments to create a Installation.
     * @example
     * // Create one Installation
     * const Installation = await prisma.installation.create({
     *   data: {
     *     // ... data to create a Installation
     *   }
     * })
     * 
     */
    create<T extends InstallationCreateArgs>(args: SelectSubset<T, InstallationCreateArgs<ExtArgs>>): Prisma__InstallationClient<$Result.GetResult<Prisma.$InstallationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Installations.
     * @param {InstallationCreateManyArgs} args - Arguments to create many Installations.
     * @example
     * // Create many Installations
     * const installation = await prisma.installation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InstallationCreateManyArgs>(args?: SelectSubset<T, InstallationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Installations and returns the data saved in the database.
     * @param {InstallationCreateManyAndReturnArgs} args - Arguments to create many Installations.
     * @example
     * // Create many Installations
     * const installation = await prisma.installation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Installations and only return the `id`
     * const installationWithIdOnly = await prisma.installation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InstallationCreateManyAndReturnArgs>(args?: SelectSubset<T, InstallationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstallationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Installation.
     * @param {InstallationDeleteArgs} args - Arguments to delete one Installation.
     * @example
     * // Delete one Installation
     * const Installation = await prisma.installation.delete({
     *   where: {
     *     // ... filter to delete one Installation
     *   }
     * })
     * 
     */
    delete<T extends InstallationDeleteArgs>(args: SelectSubset<T, InstallationDeleteArgs<ExtArgs>>): Prisma__InstallationClient<$Result.GetResult<Prisma.$InstallationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Installation.
     * @param {InstallationUpdateArgs} args - Arguments to update one Installation.
     * @example
     * // Update one Installation
     * const installation = await prisma.installation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InstallationUpdateArgs>(args: SelectSubset<T, InstallationUpdateArgs<ExtArgs>>): Prisma__InstallationClient<$Result.GetResult<Prisma.$InstallationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Installations.
     * @param {InstallationDeleteManyArgs} args - Arguments to filter Installations to delete.
     * @example
     * // Delete a few Installations
     * const { count } = await prisma.installation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InstallationDeleteManyArgs>(args?: SelectSubset<T, InstallationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Installations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstallationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Installations
     * const installation = await prisma.installation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InstallationUpdateManyArgs>(args: SelectSubset<T, InstallationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Installations and returns the data updated in the database.
     * @param {InstallationUpdateManyAndReturnArgs} args - Arguments to update many Installations.
     * @example
     * // Update many Installations
     * const installation = await prisma.installation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Installations and only return the `id`
     * const installationWithIdOnly = await prisma.installation.updateManyAndReturn({
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
    updateManyAndReturn<T extends InstallationUpdateManyAndReturnArgs>(args: SelectSubset<T, InstallationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InstallationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Installation.
     * @param {InstallationUpsertArgs} args - Arguments to update or create a Installation.
     * @example
     * // Update or create a Installation
     * const installation = await prisma.installation.upsert({
     *   create: {
     *     // ... data to create a Installation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Installation we want to update
     *   }
     * })
     */
    upsert<T extends InstallationUpsertArgs>(args: SelectSubset<T, InstallationUpsertArgs<ExtArgs>>): Prisma__InstallationClient<$Result.GetResult<Prisma.$InstallationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Installations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstallationCountArgs} args - Arguments to filter Installations to count.
     * @example
     * // Count the number of Installations
     * const count = await prisma.installation.count({
     *   where: {
     *     // ... the filter for the Installations we want to count
     *   }
     * })
    **/
    count<T extends InstallationCountArgs>(
      args?: Subset<T, InstallationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InstallationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Installation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstallationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InstallationAggregateArgs>(args: Subset<T, InstallationAggregateArgs>): Prisma.PrismaPromise<GetInstallationAggregateType<T>>

    /**
     * Group by Installation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InstallationGroupByArgs} args - Group by arguments.
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
      T extends InstallationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InstallationGroupByArgs['orderBy'] }
        : { orderBy?: InstallationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InstallationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInstallationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Installation model
   */
  readonly fields: InstallationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Installation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InstallationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    license<T extends LicenseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LicenseDefaultArgs<ExtArgs>>): Prisma__LicenseClient<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    events<T extends Installation$eventsArgs<ExtArgs> = {}>(args?: Subset<T, Installation$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LicenseEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Installation model
   */
  interface InstallationFieldRefs {
    readonly id: FieldRef<"Installation", 'String'>
    readonly licenseId: FieldRef<"Installation", 'String'>
    readonly machineId: FieldRef<"Installation", 'String'>
    readonly deviceName: FieldRef<"Installation", 'String'>
    readonly operatingSystem: FieldRef<"Installation", 'String'>
    readonly appVersion: FieldRef<"Installation", 'String'>
    readonly activatedAt: FieldRef<"Installation", 'DateTime'>
    readonly lastSeenAt: FieldRef<"Installation", 'DateTime'>
    readonly deactivatedAt: FieldRef<"Installation", 'DateTime'>
    readonly status: FieldRef<"Installation", 'InstallationStatus'>
    readonly createdAt: FieldRef<"Installation", 'DateTime'>
    readonly updatedAt: FieldRef<"Installation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Installation findUnique
   */
  export type InstallationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Installation
     */
    select?: InstallationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Installation
     */
    omit?: InstallationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstallationInclude<ExtArgs> | null
    /**
     * Filter, which Installation to fetch.
     */
    where: InstallationWhereUniqueInput
  }

  /**
   * Installation findUniqueOrThrow
   */
  export type InstallationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Installation
     */
    select?: InstallationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Installation
     */
    omit?: InstallationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstallationInclude<ExtArgs> | null
    /**
     * Filter, which Installation to fetch.
     */
    where: InstallationWhereUniqueInput
  }

  /**
   * Installation findFirst
   */
  export type InstallationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Installation
     */
    select?: InstallationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Installation
     */
    omit?: InstallationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstallationInclude<ExtArgs> | null
    /**
     * Filter, which Installation to fetch.
     */
    where?: InstallationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Installations to fetch.
     */
    orderBy?: InstallationOrderByWithRelationInput | InstallationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Installations.
     */
    cursor?: InstallationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Installations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Installations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Installations.
     */
    distinct?: InstallationScalarFieldEnum | InstallationScalarFieldEnum[]
  }

  /**
   * Installation findFirstOrThrow
   */
  export type InstallationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Installation
     */
    select?: InstallationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Installation
     */
    omit?: InstallationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstallationInclude<ExtArgs> | null
    /**
     * Filter, which Installation to fetch.
     */
    where?: InstallationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Installations to fetch.
     */
    orderBy?: InstallationOrderByWithRelationInput | InstallationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Installations.
     */
    cursor?: InstallationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Installations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Installations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Installations.
     */
    distinct?: InstallationScalarFieldEnum | InstallationScalarFieldEnum[]
  }

  /**
   * Installation findMany
   */
  export type InstallationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Installation
     */
    select?: InstallationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Installation
     */
    omit?: InstallationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstallationInclude<ExtArgs> | null
    /**
     * Filter, which Installations to fetch.
     */
    where?: InstallationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Installations to fetch.
     */
    orderBy?: InstallationOrderByWithRelationInput | InstallationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Installations.
     */
    cursor?: InstallationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Installations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Installations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Installations.
     */
    distinct?: InstallationScalarFieldEnum | InstallationScalarFieldEnum[]
  }

  /**
   * Installation create
   */
  export type InstallationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Installation
     */
    select?: InstallationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Installation
     */
    omit?: InstallationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstallationInclude<ExtArgs> | null
    /**
     * The data needed to create a Installation.
     */
    data: XOR<InstallationCreateInput, InstallationUncheckedCreateInput>
  }

  /**
   * Installation createMany
   */
  export type InstallationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Installations.
     */
    data: InstallationCreateManyInput | InstallationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Installation createManyAndReturn
   */
  export type InstallationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Installation
     */
    select?: InstallationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Installation
     */
    omit?: InstallationOmit<ExtArgs> | null
    /**
     * The data used to create many Installations.
     */
    data: InstallationCreateManyInput | InstallationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstallationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Installation update
   */
  export type InstallationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Installation
     */
    select?: InstallationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Installation
     */
    omit?: InstallationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstallationInclude<ExtArgs> | null
    /**
     * The data needed to update a Installation.
     */
    data: XOR<InstallationUpdateInput, InstallationUncheckedUpdateInput>
    /**
     * Choose, which Installation to update.
     */
    where: InstallationWhereUniqueInput
  }

  /**
   * Installation updateMany
   */
  export type InstallationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Installations.
     */
    data: XOR<InstallationUpdateManyMutationInput, InstallationUncheckedUpdateManyInput>
    /**
     * Filter which Installations to update
     */
    where?: InstallationWhereInput
    /**
     * Limit how many Installations to update.
     */
    limit?: number
  }

  /**
   * Installation updateManyAndReturn
   */
  export type InstallationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Installation
     */
    select?: InstallationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Installation
     */
    omit?: InstallationOmit<ExtArgs> | null
    /**
     * The data used to update Installations.
     */
    data: XOR<InstallationUpdateManyMutationInput, InstallationUncheckedUpdateManyInput>
    /**
     * Filter which Installations to update
     */
    where?: InstallationWhereInput
    /**
     * Limit how many Installations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstallationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Installation upsert
   */
  export type InstallationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Installation
     */
    select?: InstallationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Installation
     */
    omit?: InstallationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstallationInclude<ExtArgs> | null
    /**
     * The filter to search for the Installation to update in case it exists.
     */
    where: InstallationWhereUniqueInput
    /**
     * In case the Installation found by the `where` argument doesn't exist, create a new Installation with this data.
     */
    create: XOR<InstallationCreateInput, InstallationUncheckedCreateInput>
    /**
     * In case the Installation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InstallationUpdateInput, InstallationUncheckedUpdateInput>
  }

  /**
   * Installation delete
   */
  export type InstallationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Installation
     */
    select?: InstallationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Installation
     */
    omit?: InstallationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstallationInclude<ExtArgs> | null
    /**
     * Filter which Installation to delete.
     */
    where: InstallationWhereUniqueInput
  }

  /**
   * Installation deleteMany
   */
  export type InstallationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Installations to delete
     */
    where?: InstallationWhereInput
    /**
     * Limit how many Installations to delete.
     */
    limit?: number
  }

  /**
   * Installation.events
   */
  export type Installation$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseEvent
     */
    select?: LicenseEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LicenseEvent
     */
    omit?: LicenseEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseEventInclude<ExtArgs> | null
    where?: LicenseEventWhereInput
    orderBy?: LicenseEventOrderByWithRelationInput | LicenseEventOrderByWithRelationInput[]
    cursor?: LicenseEventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LicenseEventScalarFieldEnum | LicenseEventScalarFieldEnum[]
  }

  /**
   * Installation without action
   */
  export type InstallationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Installation
     */
    select?: InstallationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Installation
     */
    omit?: InstallationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstallationInclude<ExtArgs> | null
  }


  /**
   * Model LicenseEvent
   */

  export type AggregateLicenseEvent = {
    _count: LicenseEventCountAggregateOutputType | null
    _min: LicenseEventMinAggregateOutputType | null
    _max: LicenseEventMaxAggregateOutputType | null
  }

  export type LicenseEventMinAggregateOutputType = {
    id: string | null
    licenseId: string | null
    installationId: string | null
    type: $Enums.LicenseEventType | null
    ipAddress: string | null
    userAgent: string | null
    details: string | null
    createdAt: Date | null
  }

  export type LicenseEventMaxAggregateOutputType = {
    id: string | null
    licenseId: string | null
    installationId: string | null
    type: $Enums.LicenseEventType | null
    ipAddress: string | null
    userAgent: string | null
    details: string | null
    createdAt: Date | null
  }

  export type LicenseEventCountAggregateOutputType = {
    id: number
    licenseId: number
    installationId: number
    type: number
    ipAddress: number
    userAgent: number
    details: number
    createdAt: number
    _all: number
  }


  export type LicenseEventMinAggregateInputType = {
    id?: true
    licenseId?: true
    installationId?: true
    type?: true
    ipAddress?: true
    userAgent?: true
    details?: true
    createdAt?: true
  }

  export type LicenseEventMaxAggregateInputType = {
    id?: true
    licenseId?: true
    installationId?: true
    type?: true
    ipAddress?: true
    userAgent?: true
    details?: true
    createdAt?: true
  }

  export type LicenseEventCountAggregateInputType = {
    id?: true
    licenseId?: true
    installationId?: true
    type?: true
    ipAddress?: true
    userAgent?: true
    details?: true
    createdAt?: true
    _all?: true
  }

  export type LicenseEventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LicenseEvent to aggregate.
     */
    where?: LicenseEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LicenseEvents to fetch.
     */
    orderBy?: LicenseEventOrderByWithRelationInput | LicenseEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LicenseEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LicenseEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LicenseEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LicenseEvents
    **/
    _count?: true | LicenseEventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LicenseEventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LicenseEventMaxAggregateInputType
  }

  export type GetLicenseEventAggregateType<T extends LicenseEventAggregateArgs> = {
        [P in keyof T & keyof AggregateLicenseEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLicenseEvent[P]>
      : GetScalarType<T[P], AggregateLicenseEvent[P]>
  }




  export type LicenseEventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LicenseEventWhereInput
    orderBy?: LicenseEventOrderByWithAggregationInput | LicenseEventOrderByWithAggregationInput[]
    by: LicenseEventScalarFieldEnum[] | LicenseEventScalarFieldEnum
    having?: LicenseEventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LicenseEventCountAggregateInputType | true
    _min?: LicenseEventMinAggregateInputType
    _max?: LicenseEventMaxAggregateInputType
  }

  export type LicenseEventGroupByOutputType = {
    id: string
    licenseId: string
    installationId: string | null
    type: $Enums.LicenseEventType
    ipAddress: string | null
    userAgent: string | null
    details: string | null
    createdAt: Date
    _count: LicenseEventCountAggregateOutputType | null
    _min: LicenseEventMinAggregateOutputType | null
    _max: LicenseEventMaxAggregateOutputType | null
  }

  type GetLicenseEventGroupByPayload<T extends LicenseEventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LicenseEventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LicenseEventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LicenseEventGroupByOutputType[P]>
            : GetScalarType<T[P], LicenseEventGroupByOutputType[P]>
        }
      >
    >


  export type LicenseEventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    licenseId?: boolean
    installationId?: boolean
    type?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    details?: boolean
    createdAt?: boolean
    license?: boolean | LicenseDefaultArgs<ExtArgs>
    installation?: boolean | LicenseEvent$installationArgs<ExtArgs>
  }, ExtArgs["result"]["licenseEvent"]>

  export type LicenseEventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    licenseId?: boolean
    installationId?: boolean
    type?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    details?: boolean
    createdAt?: boolean
    license?: boolean | LicenseDefaultArgs<ExtArgs>
    installation?: boolean | LicenseEvent$installationArgs<ExtArgs>
  }, ExtArgs["result"]["licenseEvent"]>

  export type LicenseEventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    licenseId?: boolean
    installationId?: boolean
    type?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    details?: boolean
    createdAt?: boolean
    license?: boolean | LicenseDefaultArgs<ExtArgs>
    installation?: boolean | LicenseEvent$installationArgs<ExtArgs>
  }, ExtArgs["result"]["licenseEvent"]>

  export type LicenseEventSelectScalar = {
    id?: boolean
    licenseId?: boolean
    installationId?: boolean
    type?: boolean
    ipAddress?: boolean
    userAgent?: boolean
    details?: boolean
    createdAt?: boolean
  }

  export type LicenseEventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "licenseId" | "installationId" | "type" | "ipAddress" | "userAgent" | "details" | "createdAt", ExtArgs["result"]["licenseEvent"]>
  export type LicenseEventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    license?: boolean | LicenseDefaultArgs<ExtArgs>
    installation?: boolean | LicenseEvent$installationArgs<ExtArgs>
  }
  export type LicenseEventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    license?: boolean | LicenseDefaultArgs<ExtArgs>
    installation?: boolean | LicenseEvent$installationArgs<ExtArgs>
  }
  export type LicenseEventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    license?: boolean | LicenseDefaultArgs<ExtArgs>
    installation?: boolean | LicenseEvent$installationArgs<ExtArgs>
  }

  export type $LicenseEventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LicenseEvent"
    objects: {
      license: Prisma.$LicensePayload<ExtArgs>
      installation: Prisma.$InstallationPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      licenseId: string
      installationId: string | null
      type: $Enums.LicenseEventType
      ipAddress: string | null
      userAgent: string | null
      details: string | null
      createdAt: Date
    }, ExtArgs["result"]["licenseEvent"]>
    composites: {}
  }

  type LicenseEventGetPayload<S extends boolean | null | undefined | LicenseEventDefaultArgs> = $Result.GetResult<Prisma.$LicenseEventPayload, S>

  type LicenseEventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LicenseEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LicenseEventCountAggregateInputType | true
    }

  export interface LicenseEventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LicenseEvent'], meta: { name: 'LicenseEvent' } }
    /**
     * Find zero or one LicenseEvent that matches the filter.
     * @param {LicenseEventFindUniqueArgs} args - Arguments to find a LicenseEvent
     * @example
     * // Get one LicenseEvent
     * const licenseEvent = await prisma.licenseEvent.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LicenseEventFindUniqueArgs>(args: SelectSubset<T, LicenseEventFindUniqueArgs<ExtArgs>>): Prisma__LicenseEventClient<$Result.GetResult<Prisma.$LicenseEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LicenseEvent that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LicenseEventFindUniqueOrThrowArgs} args - Arguments to find a LicenseEvent
     * @example
     * // Get one LicenseEvent
     * const licenseEvent = await prisma.licenseEvent.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LicenseEventFindUniqueOrThrowArgs>(args: SelectSubset<T, LicenseEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LicenseEventClient<$Result.GetResult<Prisma.$LicenseEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LicenseEvent that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseEventFindFirstArgs} args - Arguments to find a LicenseEvent
     * @example
     * // Get one LicenseEvent
     * const licenseEvent = await prisma.licenseEvent.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LicenseEventFindFirstArgs>(args?: SelectSubset<T, LicenseEventFindFirstArgs<ExtArgs>>): Prisma__LicenseEventClient<$Result.GetResult<Prisma.$LicenseEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LicenseEvent that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseEventFindFirstOrThrowArgs} args - Arguments to find a LicenseEvent
     * @example
     * // Get one LicenseEvent
     * const licenseEvent = await prisma.licenseEvent.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LicenseEventFindFirstOrThrowArgs>(args?: SelectSubset<T, LicenseEventFindFirstOrThrowArgs<ExtArgs>>): Prisma__LicenseEventClient<$Result.GetResult<Prisma.$LicenseEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LicenseEvents that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseEventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LicenseEvents
     * const licenseEvents = await prisma.licenseEvent.findMany()
     * 
     * // Get first 10 LicenseEvents
     * const licenseEvents = await prisma.licenseEvent.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const licenseEventWithIdOnly = await prisma.licenseEvent.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LicenseEventFindManyArgs>(args?: SelectSubset<T, LicenseEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LicenseEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LicenseEvent.
     * @param {LicenseEventCreateArgs} args - Arguments to create a LicenseEvent.
     * @example
     * // Create one LicenseEvent
     * const LicenseEvent = await prisma.licenseEvent.create({
     *   data: {
     *     // ... data to create a LicenseEvent
     *   }
     * })
     * 
     */
    create<T extends LicenseEventCreateArgs>(args: SelectSubset<T, LicenseEventCreateArgs<ExtArgs>>): Prisma__LicenseEventClient<$Result.GetResult<Prisma.$LicenseEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LicenseEvents.
     * @param {LicenseEventCreateManyArgs} args - Arguments to create many LicenseEvents.
     * @example
     * // Create many LicenseEvents
     * const licenseEvent = await prisma.licenseEvent.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LicenseEventCreateManyArgs>(args?: SelectSubset<T, LicenseEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LicenseEvents and returns the data saved in the database.
     * @param {LicenseEventCreateManyAndReturnArgs} args - Arguments to create many LicenseEvents.
     * @example
     * // Create many LicenseEvents
     * const licenseEvent = await prisma.licenseEvent.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LicenseEvents and only return the `id`
     * const licenseEventWithIdOnly = await prisma.licenseEvent.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LicenseEventCreateManyAndReturnArgs>(args?: SelectSubset<T, LicenseEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LicenseEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LicenseEvent.
     * @param {LicenseEventDeleteArgs} args - Arguments to delete one LicenseEvent.
     * @example
     * // Delete one LicenseEvent
     * const LicenseEvent = await prisma.licenseEvent.delete({
     *   where: {
     *     // ... filter to delete one LicenseEvent
     *   }
     * })
     * 
     */
    delete<T extends LicenseEventDeleteArgs>(args: SelectSubset<T, LicenseEventDeleteArgs<ExtArgs>>): Prisma__LicenseEventClient<$Result.GetResult<Prisma.$LicenseEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LicenseEvent.
     * @param {LicenseEventUpdateArgs} args - Arguments to update one LicenseEvent.
     * @example
     * // Update one LicenseEvent
     * const licenseEvent = await prisma.licenseEvent.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LicenseEventUpdateArgs>(args: SelectSubset<T, LicenseEventUpdateArgs<ExtArgs>>): Prisma__LicenseEventClient<$Result.GetResult<Prisma.$LicenseEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LicenseEvents.
     * @param {LicenseEventDeleteManyArgs} args - Arguments to filter LicenseEvents to delete.
     * @example
     * // Delete a few LicenseEvents
     * const { count } = await prisma.licenseEvent.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LicenseEventDeleteManyArgs>(args?: SelectSubset<T, LicenseEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LicenseEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseEventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LicenseEvents
     * const licenseEvent = await prisma.licenseEvent.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LicenseEventUpdateManyArgs>(args: SelectSubset<T, LicenseEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LicenseEvents and returns the data updated in the database.
     * @param {LicenseEventUpdateManyAndReturnArgs} args - Arguments to update many LicenseEvents.
     * @example
     * // Update many LicenseEvents
     * const licenseEvent = await prisma.licenseEvent.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LicenseEvents and only return the `id`
     * const licenseEventWithIdOnly = await prisma.licenseEvent.updateManyAndReturn({
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
    updateManyAndReturn<T extends LicenseEventUpdateManyAndReturnArgs>(args: SelectSubset<T, LicenseEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LicenseEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LicenseEvent.
     * @param {LicenseEventUpsertArgs} args - Arguments to update or create a LicenseEvent.
     * @example
     * // Update or create a LicenseEvent
     * const licenseEvent = await prisma.licenseEvent.upsert({
     *   create: {
     *     // ... data to create a LicenseEvent
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LicenseEvent we want to update
     *   }
     * })
     */
    upsert<T extends LicenseEventUpsertArgs>(args: SelectSubset<T, LicenseEventUpsertArgs<ExtArgs>>): Prisma__LicenseEventClient<$Result.GetResult<Prisma.$LicenseEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LicenseEvents.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseEventCountArgs} args - Arguments to filter LicenseEvents to count.
     * @example
     * // Count the number of LicenseEvents
     * const count = await prisma.licenseEvent.count({
     *   where: {
     *     // ... the filter for the LicenseEvents we want to count
     *   }
     * })
    **/
    count<T extends LicenseEventCountArgs>(
      args?: Subset<T, LicenseEventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LicenseEventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LicenseEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseEventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LicenseEventAggregateArgs>(args: Subset<T, LicenseEventAggregateArgs>): Prisma.PrismaPromise<GetLicenseEventAggregateType<T>>

    /**
     * Group by LicenseEvent.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LicenseEventGroupByArgs} args - Group by arguments.
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
      T extends LicenseEventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LicenseEventGroupByArgs['orderBy'] }
        : { orderBy?: LicenseEventGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LicenseEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLicenseEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LicenseEvent model
   */
  readonly fields: LicenseEventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LicenseEvent.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LicenseEventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    license<T extends LicenseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LicenseDefaultArgs<ExtArgs>>): Prisma__LicenseClient<$Result.GetResult<Prisma.$LicensePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    installation<T extends LicenseEvent$installationArgs<ExtArgs> = {}>(args?: Subset<T, LicenseEvent$installationArgs<ExtArgs>>): Prisma__InstallationClient<$Result.GetResult<Prisma.$InstallationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the LicenseEvent model
   */
  interface LicenseEventFieldRefs {
    readonly id: FieldRef<"LicenseEvent", 'String'>
    readonly licenseId: FieldRef<"LicenseEvent", 'String'>
    readonly installationId: FieldRef<"LicenseEvent", 'String'>
    readonly type: FieldRef<"LicenseEvent", 'LicenseEventType'>
    readonly ipAddress: FieldRef<"LicenseEvent", 'String'>
    readonly userAgent: FieldRef<"LicenseEvent", 'String'>
    readonly details: FieldRef<"LicenseEvent", 'String'>
    readonly createdAt: FieldRef<"LicenseEvent", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * LicenseEvent findUnique
   */
  export type LicenseEventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseEvent
     */
    select?: LicenseEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LicenseEvent
     */
    omit?: LicenseEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseEventInclude<ExtArgs> | null
    /**
     * Filter, which LicenseEvent to fetch.
     */
    where: LicenseEventWhereUniqueInput
  }

  /**
   * LicenseEvent findUniqueOrThrow
   */
  export type LicenseEventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseEvent
     */
    select?: LicenseEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LicenseEvent
     */
    omit?: LicenseEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseEventInclude<ExtArgs> | null
    /**
     * Filter, which LicenseEvent to fetch.
     */
    where: LicenseEventWhereUniqueInput
  }

  /**
   * LicenseEvent findFirst
   */
  export type LicenseEventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseEvent
     */
    select?: LicenseEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LicenseEvent
     */
    omit?: LicenseEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseEventInclude<ExtArgs> | null
    /**
     * Filter, which LicenseEvent to fetch.
     */
    where?: LicenseEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LicenseEvents to fetch.
     */
    orderBy?: LicenseEventOrderByWithRelationInput | LicenseEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LicenseEvents.
     */
    cursor?: LicenseEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LicenseEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LicenseEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LicenseEvents.
     */
    distinct?: LicenseEventScalarFieldEnum | LicenseEventScalarFieldEnum[]
  }

  /**
   * LicenseEvent findFirstOrThrow
   */
  export type LicenseEventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseEvent
     */
    select?: LicenseEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LicenseEvent
     */
    omit?: LicenseEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseEventInclude<ExtArgs> | null
    /**
     * Filter, which LicenseEvent to fetch.
     */
    where?: LicenseEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LicenseEvents to fetch.
     */
    orderBy?: LicenseEventOrderByWithRelationInput | LicenseEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LicenseEvents.
     */
    cursor?: LicenseEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LicenseEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LicenseEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LicenseEvents.
     */
    distinct?: LicenseEventScalarFieldEnum | LicenseEventScalarFieldEnum[]
  }

  /**
   * LicenseEvent findMany
   */
  export type LicenseEventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseEvent
     */
    select?: LicenseEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LicenseEvent
     */
    omit?: LicenseEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseEventInclude<ExtArgs> | null
    /**
     * Filter, which LicenseEvents to fetch.
     */
    where?: LicenseEventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LicenseEvents to fetch.
     */
    orderBy?: LicenseEventOrderByWithRelationInput | LicenseEventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LicenseEvents.
     */
    cursor?: LicenseEventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LicenseEvents from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LicenseEvents.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LicenseEvents.
     */
    distinct?: LicenseEventScalarFieldEnum | LicenseEventScalarFieldEnum[]
  }

  /**
   * LicenseEvent create
   */
  export type LicenseEventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseEvent
     */
    select?: LicenseEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LicenseEvent
     */
    omit?: LicenseEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseEventInclude<ExtArgs> | null
    /**
     * The data needed to create a LicenseEvent.
     */
    data: XOR<LicenseEventCreateInput, LicenseEventUncheckedCreateInput>
  }

  /**
   * LicenseEvent createMany
   */
  export type LicenseEventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LicenseEvents.
     */
    data: LicenseEventCreateManyInput | LicenseEventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LicenseEvent createManyAndReturn
   */
  export type LicenseEventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseEvent
     */
    select?: LicenseEventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LicenseEvent
     */
    omit?: LicenseEventOmit<ExtArgs> | null
    /**
     * The data used to create many LicenseEvents.
     */
    data: LicenseEventCreateManyInput | LicenseEventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseEventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LicenseEvent update
   */
  export type LicenseEventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseEvent
     */
    select?: LicenseEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LicenseEvent
     */
    omit?: LicenseEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseEventInclude<ExtArgs> | null
    /**
     * The data needed to update a LicenseEvent.
     */
    data: XOR<LicenseEventUpdateInput, LicenseEventUncheckedUpdateInput>
    /**
     * Choose, which LicenseEvent to update.
     */
    where: LicenseEventWhereUniqueInput
  }

  /**
   * LicenseEvent updateMany
   */
  export type LicenseEventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LicenseEvents.
     */
    data: XOR<LicenseEventUpdateManyMutationInput, LicenseEventUncheckedUpdateManyInput>
    /**
     * Filter which LicenseEvents to update
     */
    where?: LicenseEventWhereInput
    /**
     * Limit how many LicenseEvents to update.
     */
    limit?: number
  }

  /**
   * LicenseEvent updateManyAndReturn
   */
  export type LicenseEventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseEvent
     */
    select?: LicenseEventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LicenseEvent
     */
    omit?: LicenseEventOmit<ExtArgs> | null
    /**
     * The data used to update LicenseEvents.
     */
    data: XOR<LicenseEventUpdateManyMutationInput, LicenseEventUncheckedUpdateManyInput>
    /**
     * Filter which LicenseEvents to update
     */
    where?: LicenseEventWhereInput
    /**
     * Limit how many LicenseEvents to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseEventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LicenseEvent upsert
   */
  export type LicenseEventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseEvent
     */
    select?: LicenseEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LicenseEvent
     */
    omit?: LicenseEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseEventInclude<ExtArgs> | null
    /**
     * The filter to search for the LicenseEvent to update in case it exists.
     */
    where: LicenseEventWhereUniqueInput
    /**
     * In case the LicenseEvent found by the `where` argument doesn't exist, create a new LicenseEvent with this data.
     */
    create: XOR<LicenseEventCreateInput, LicenseEventUncheckedCreateInput>
    /**
     * In case the LicenseEvent was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LicenseEventUpdateInput, LicenseEventUncheckedUpdateInput>
  }

  /**
   * LicenseEvent delete
   */
  export type LicenseEventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseEvent
     */
    select?: LicenseEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LicenseEvent
     */
    omit?: LicenseEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseEventInclude<ExtArgs> | null
    /**
     * Filter which LicenseEvent to delete.
     */
    where: LicenseEventWhereUniqueInput
  }

  /**
   * LicenseEvent deleteMany
   */
  export type LicenseEventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LicenseEvents to delete
     */
    where?: LicenseEventWhereInput
    /**
     * Limit how many LicenseEvents to delete.
     */
    limit?: number
  }

  /**
   * LicenseEvent.installation
   */
  export type LicenseEvent$installationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Installation
     */
    select?: InstallationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Installation
     */
    omit?: InstallationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InstallationInclude<ExtArgs> | null
    where?: InstallationWhereInput
  }

  /**
   * LicenseEvent without action
   */
  export type LicenseEventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LicenseEvent
     */
    select?: LicenseEventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the LicenseEvent
     */
    omit?: LicenseEventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LicenseEventInclude<ExtArgs> | null
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


  export const AdminScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    passwordHash: 'passwordHash',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const CustomerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    company: 'company',
    address: 'address',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    name: 'name',
    code: 'code',
    description: 'description',
    version: 'version',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const LicenseScalarFieldEnum: {
    id: 'id',
    licenseKey: 'licenseKey',
    type: 'type',
    status: 'status',
    issuedAt: 'issuedAt',
    expiresAt: 'expiresAt',
    maxInstallations: 'maxInstallations',
    customerId: 'customerId',
    productId: 'productId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type LicenseScalarFieldEnum = (typeof LicenseScalarFieldEnum)[keyof typeof LicenseScalarFieldEnum]


  export const InstallationScalarFieldEnum: {
    id: 'id',
    licenseId: 'licenseId',
    machineId: 'machineId',
    deviceName: 'deviceName',
    operatingSystem: 'operatingSystem',
    appVersion: 'appVersion',
    activatedAt: 'activatedAt',
    lastSeenAt: 'lastSeenAt',
    deactivatedAt: 'deactivatedAt',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InstallationScalarFieldEnum = (typeof InstallationScalarFieldEnum)[keyof typeof InstallationScalarFieldEnum]


  export const LicenseEventScalarFieldEnum: {
    id: 'id',
    licenseId: 'licenseId',
    installationId: 'installationId',
    type: 'type',
    ipAddress: 'ipAddress',
    userAgent: 'userAgent',
    details: 'details',
    createdAt: 'createdAt'
  };

  export type LicenseEventScalarFieldEnum = (typeof LicenseEventScalarFieldEnum)[keyof typeof LicenseEventScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'LicenseType'
   */
  export type EnumLicenseTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LicenseType'>
    


  /**
   * Reference to a field of type 'LicenseType[]'
   */
  export type ListEnumLicenseTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LicenseType[]'>
    


  /**
   * Reference to a field of type 'LicenseStatus'
   */
  export type EnumLicenseStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LicenseStatus'>
    


  /**
   * Reference to a field of type 'LicenseStatus[]'
   */
  export type ListEnumLicenseStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LicenseStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'InstallationStatus'
   */
  export type EnumInstallationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InstallationStatus'>
    


  /**
   * Reference to a field of type 'InstallationStatus[]'
   */
  export type ListEnumInstallationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InstallationStatus[]'>
    


  /**
   * Reference to a field of type 'LicenseEventType'
   */
  export type EnumLicenseEventTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LicenseEventType'>
    


  /**
   * Reference to a field of type 'LicenseEventType[]'
   */
  export type ListEnumLicenseEventTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LicenseEventType[]'>
    


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


  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id?: StringFilter<"Admin"> | string
    name?: StringFilter<"Admin"> | string
    email?: StringFilter<"Admin"> | string
    passwordHash?: StringFilter<"Admin"> | string
    isActive?: BoolFilter<"Admin"> | boolean
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    updatedAt?: DateTimeFilter<"Admin"> | Date | string
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    name?: StringFilter<"Admin"> | string
    passwordHash?: StringFilter<"Admin"> | string
    isActive?: BoolFilter<"Admin"> | boolean
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    updatedAt?: DateTimeFilter<"Admin"> | Date | string
  }, "id" | "email">

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Admin"> | string
    name?: StringWithAggregatesFilter<"Admin"> | string
    email?: StringWithAggregatesFilter<"Admin"> | string
    passwordHash?: StringWithAggregatesFilter<"Admin"> | string
    isActive?: BoolWithAggregatesFilter<"Admin"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
  }

  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    id?: StringFilter<"Customer"> | string
    name?: StringFilter<"Customer"> | string
    email?: StringNullableFilter<"Customer"> | string | null
    phone?: StringNullableFilter<"Customer"> | string | null
    company?: StringNullableFilter<"Customer"> | string | null
    address?: StringNullableFilter<"Customer"> | string | null
    notes?: StringNullableFilter<"Customer"> | string | null
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
    licenses?: LicenseListRelationFilter
  }

  export type CustomerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    company?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    licenses?: LicenseOrderByRelationAggregateInput
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    name?: StringFilter<"Customer"> | string
    email?: StringNullableFilter<"Customer"> | string | null
    phone?: StringNullableFilter<"Customer"> | string | null
    company?: StringNullableFilter<"Customer"> | string | null
    address?: StringNullableFilter<"Customer"> | string | null
    notes?: StringNullableFilter<"Customer"> | string | null
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    updatedAt?: DateTimeFilter<"Customer"> | Date | string
    licenses?: LicenseListRelationFilter
  }, "id">

  export type CustomerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    company?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    OR?: CustomerScalarWhereWithAggregatesInput[]
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Customer"> | string
    name?: StringWithAggregatesFilter<"Customer"> | string
    email?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    company?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    address?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    notes?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    code?: StringFilter<"Product"> | string
    description?: StringNullableFilter<"Product"> | string | null
    version?: StringNullableFilter<"Product"> | string | null
    isActive?: BoolFilter<"Product"> | boolean
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    licenses?: LicenseListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    description?: SortOrderInput | SortOrder
    version?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    licenses?: LicenseOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    name?: StringFilter<"Product"> | string
    description?: StringNullableFilter<"Product"> | string | null
    version?: StringNullableFilter<"Product"> | string | null
    isActive?: BoolFilter<"Product"> | boolean
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    licenses?: LicenseListRelationFilter
  }, "id" | "code">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    description?: SortOrderInput | SortOrder
    version?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Product"> | string
    name?: StringWithAggregatesFilter<"Product"> | string
    code?: StringWithAggregatesFilter<"Product"> | string
    description?: StringNullableWithAggregatesFilter<"Product"> | string | null
    version?: StringNullableWithAggregatesFilter<"Product"> | string | null
    isActive?: BoolWithAggregatesFilter<"Product"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
  }

  export type LicenseWhereInput = {
    AND?: LicenseWhereInput | LicenseWhereInput[]
    OR?: LicenseWhereInput[]
    NOT?: LicenseWhereInput | LicenseWhereInput[]
    id?: StringFilter<"License"> | string
    licenseKey?: StringFilter<"License"> | string
    type?: EnumLicenseTypeFilter<"License"> | $Enums.LicenseType
    status?: EnumLicenseStatusFilter<"License"> | $Enums.LicenseStatus
    issuedAt?: DateTimeFilter<"License"> | Date | string
    expiresAt?: DateTimeNullableFilter<"License"> | Date | string | null
    maxInstallations?: IntFilter<"License"> | number
    customerId?: StringFilter<"License"> | string
    productId?: StringFilter<"License"> | string
    createdAt?: DateTimeFilter<"License"> | Date | string
    updatedAt?: DateTimeFilter<"License"> | Date | string
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    installations?: InstallationListRelationFilter
    events?: LicenseEventListRelationFilter
  }

  export type LicenseOrderByWithRelationInput = {
    id?: SortOrder
    licenseKey?: SortOrder
    type?: SortOrder
    status?: SortOrder
    issuedAt?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    maxInstallations?: SortOrder
    customerId?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    customer?: CustomerOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
    installations?: InstallationOrderByRelationAggregateInput
    events?: LicenseEventOrderByRelationAggregateInput
  }

  export type LicenseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    licenseKey?: string
    AND?: LicenseWhereInput | LicenseWhereInput[]
    OR?: LicenseWhereInput[]
    NOT?: LicenseWhereInput | LicenseWhereInput[]
    type?: EnumLicenseTypeFilter<"License"> | $Enums.LicenseType
    status?: EnumLicenseStatusFilter<"License"> | $Enums.LicenseStatus
    issuedAt?: DateTimeFilter<"License"> | Date | string
    expiresAt?: DateTimeNullableFilter<"License"> | Date | string | null
    maxInstallations?: IntFilter<"License"> | number
    customerId?: StringFilter<"License"> | string
    productId?: StringFilter<"License"> | string
    createdAt?: DateTimeFilter<"License"> | Date | string
    updatedAt?: DateTimeFilter<"License"> | Date | string
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    installations?: InstallationListRelationFilter
    events?: LicenseEventListRelationFilter
  }, "id" | "licenseKey">

  export type LicenseOrderByWithAggregationInput = {
    id?: SortOrder
    licenseKey?: SortOrder
    type?: SortOrder
    status?: SortOrder
    issuedAt?: SortOrder
    expiresAt?: SortOrderInput | SortOrder
    maxInstallations?: SortOrder
    customerId?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: LicenseCountOrderByAggregateInput
    _avg?: LicenseAvgOrderByAggregateInput
    _max?: LicenseMaxOrderByAggregateInput
    _min?: LicenseMinOrderByAggregateInput
    _sum?: LicenseSumOrderByAggregateInput
  }

  export type LicenseScalarWhereWithAggregatesInput = {
    AND?: LicenseScalarWhereWithAggregatesInput | LicenseScalarWhereWithAggregatesInput[]
    OR?: LicenseScalarWhereWithAggregatesInput[]
    NOT?: LicenseScalarWhereWithAggregatesInput | LicenseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"License"> | string
    licenseKey?: StringWithAggregatesFilter<"License"> | string
    type?: EnumLicenseTypeWithAggregatesFilter<"License"> | $Enums.LicenseType
    status?: EnumLicenseStatusWithAggregatesFilter<"License"> | $Enums.LicenseStatus
    issuedAt?: DateTimeWithAggregatesFilter<"License"> | Date | string
    expiresAt?: DateTimeNullableWithAggregatesFilter<"License"> | Date | string | null
    maxInstallations?: IntWithAggregatesFilter<"License"> | number
    customerId?: StringWithAggregatesFilter<"License"> | string
    productId?: StringWithAggregatesFilter<"License"> | string
    createdAt?: DateTimeWithAggregatesFilter<"License"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"License"> | Date | string
  }

  export type InstallationWhereInput = {
    AND?: InstallationWhereInput | InstallationWhereInput[]
    OR?: InstallationWhereInput[]
    NOT?: InstallationWhereInput | InstallationWhereInput[]
    id?: StringFilter<"Installation"> | string
    licenseId?: StringFilter<"Installation"> | string
    machineId?: StringFilter<"Installation"> | string
    deviceName?: StringNullableFilter<"Installation"> | string | null
    operatingSystem?: StringNullableFilter<"Installation"> | string | null
    appVersion?: StringNullableFilter<"Installation"> | string | null
    activatedAt?: DateTimeFilter<"Installation"> | Date | string
    lastSeenAt?: DateTimeNullableFilter<"Installation"> | Date | string | null
    deactivatedAt?: DateTimeNullableFilter<"Installation"> | Date | string | null
    status?: EnumInstallationStatusFilter<"Installation"> | $Enums.InstallationStatus
    createdAt?: DateTimeFilter<"Installation"> | Date | string
    updatedAt?: DateTimeFilter<"Installation"> | Date | string
    license?: XOR<LicenseScalarRelationFilter, LicenseWhereInput>
    events?: LicenseEventListRelationFilter
  }

  export type InstallationOrderByWithRelationInput = {
    id?: SortOrder
    licenseId?: SortOrder
    machineId?: SortOrder
    deviceName?: SortOrderInput | SortOrder
    operatingSystem?: SortOrderInput | SortOrder
    appVersion?: SortOrderInput | SortOrder
    activatedAt?: SortOrder
    lastSeenAt?: SortOrderInput | SortOrder
    deactivatedAt?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    license?: LicenseOrderByWithRelationInput
    events?: LicenseEventOrderByRelationAggregateInput
  }

  export type InstallationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    licenseId_machineId?: InstallationLicenseIdMachineIdCompoundUniqueInput
    AND?: InstallationWhereInput | InstallationWhereInput[]
    OR?: InstallationWhereInput[]
    NOT?: InstallationWhereInput | InstallationWhereInput[]
    licenseId?: StringFilter<"Installation"> | string
    machineId?: StringFilter<"Installation"> | string
    deviceName?: StringNullableFilter<"Installation"> | string | null
    operatingSystem?: StringNullableFilter<"Installation"> | string | null
    appVersion?: StringNullableFilter<"Installation"> | string | null
    activatedAt?: DateTimeFilter<"Installation"> | Date | string
    lastSeenAt?: DateTimeNullableFilter<"Installation"> | Date | string | null
    deactivatedAt?: DateTimeNullableFilter<"Installation"> | Date | string | null
    status?: EnumInstallationStatusFilter<"Installation"> | $Enums.InstallationStatus
    createdAt?: DateTimeFilter<"Installation"> | Date | string
    updatedAt?: DateTimeFilter<"Installation"> | Date | string
    license?: XOR<LicenseScalarRelationFilter, LicenseWhereInput>
    events?: LicenseEventListRelationFilter
  }, "id" | "licenseId_machineId">

  export type InstallationOrderByWithAggregationInput = {
    id?: SortOrder
    licenseId?: SortOrder
    machineId?: SortOrder
    deviceName?: SortOrderInput | SortOrder
    operatingSystem?: SortOrderInput | SortOrder
    appVersion?: SortOrderInput | SortOrder
    activatedAt?: SortOrder
    lastSeenAt?: SortOrderInput | SortOrder
    deactivatedAt?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InstallationCountOrderByAggregateInput
    _max?: InstallationMaxOrderByAggregateInput
    _min?: InstallationMinOrderByAggregateInput
  }

  export type InstallationScalarWhereWithAggregatesInput = {
    AND?: InstallationScalarWhereWithAggregatesInput | InstallationScalarWhereWithAggregatesInput[]
    OR?: InstallationScalarWhereWithAggregatesInput[]
    NOT?: InstallationScalarWhereWithAggregatesInput | InstallationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Installation"> | string
    licenseId?: StringWithAggregatesFilter<"Installation"> | string
    machineId?: StringWithAggregatesFilter<"Installation"> | string
    deviceName?: StringNullableWithAggregatesFilter<"Installation"> | string | null
    operatingSystem?: StringNullableWithAggregatesFilter<"Installation"> | string | null
    appVersion?: StringNullableWithAggregatesFilter<"Installation"> | string | null
    activatedAt?: DateTimeWithAggregatesFilter<"Installation"> | Date | string
    lastSeenAt?: DateTimeNullableWithAggregatesFilter<"Installation"> | Date | string | null
    deactivatedAt?: DateTimeNullableWithAggregatesFilter<"Installation"> | Date | string | null
    status?: EnumInstallationStatusWithAggregatesFilter<"Installation"> | $Enums.InstallationStatus
    createdAt?: DateTimeWithAggregatesFilter<"Installation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Installation"> | Date | string
  }

  export type LicenseEventWhereInput = {
    AND?: LicenseEventWhereInput | LicenseEventWhereInput[]
    OR?: LicenseEventWhereInput[]
    NOT?: LicenseEventWhereInput | LicenseEventWhereInput[]
    id?: StringFilter<"LicenseEvent"> | string
    licenseId?: StringFilter<"LicenseEvent"> | string
    installationId?: StringNullableFilter<"LicenseEvent"> | string | null
    type?: EnumLicenseEventTypeFilter<"LicenseEvent"> | $Enums.LicenseEventType
    ipAddress?: StringNullableFilter<"LicenseEvent"> | string | null
    userAgent?: StringNullableFilter<"LicenseEvent"> | string | null
    details?: StringNullableFilter<"LicenseEvent"> | string | null
    createdAt?: DateTimeFilter<"LicenseEvent"> | Date | string
    license?: XOR<LicenseScalarRelationFilter, LicenseWhereInput>
    installation?: XOR<InstallationNullableScalarRelationFilter, InstallationWhereInput> | null
  }

  export type LicenseEventOrderByWithRelationInput = {
    id?: SortOrder
    licenseId?: SortOrder
    installationId?: SortOrderInput | SortOrder
    type?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    details?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    license?: LicenseOrderByWithRelationInput
    installation?: InstallationOrderByWithRelationInput
  }

  export type LicenseEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LicenseEventWhereInput | LicenseEventWhereInput[]
    OR?: LicenseEventWhereInput[]
    NOT?: LicenseEventWhereInput | LicenseEventWhereInput[]
    licenseId?: StringFilter<"LicenseEvent"> | string
    installationId?: StringNullableFilter<"LicenseEvent"> | string | null
    type?: EnumLicenseEventTypeFilter<"LicenseEvent"> | $Enums.LicenseEventType
    ipAddress?: StringNullableFilter<"LicenseEvent"> | string | null
    userAgent?: StringNullableFilter<"LicenseEvent"> | string | null
    details?: StringNullableFilter<"LicenseEvent"> | string | null
    createdAt?: DateTimeFilter<"LicenseEvent"> | Date | string
    license?: XOR<LicenseScalarRelationFilter, LicenseWhereInput>
    installation?: XOR<InstallationNullableScalarRelationFilter, InstallationWhereInput> | null
  }, "id">

  export type LicenseEventOrderByWithAggregationInput = {
    id?: SortOrder
    licenseId?: SortOrder
    installationId?: SortOrderInput | SortOrder
    type?: SortOrder
    ipAddress?: SortOrderInput | SortOrder
    userAgent?: SortOrderInput | SortOrder
    details?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: LicenseEventCountOrderByAggregateInput
    _max?: LicenseEventMaxOrderByAggregateInput
    _min?: LicenseEventMinOrderByAggregateInput
  }

  export type LicenseEventScalarWhereWithAggregatesInput = {
    AND?: LicenseEventScalarWhereWithAggregatesInput | LicenseEventScalarWhereWithAggregatesInput[]
    OR?: LicenseEventScalarWhereWithAggregatesInput[]
    NOT?: LicenseEventScalarWhereWithAggregatesInput | LicenseEventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LicenseEvent"> | string
    licenseId?: StringWithAggregatesFilter<"LicenseEvent"> | string
    installationId?: StringNullableWithAggregatesFilter<"LicenseEvent"> | string | null
    type?: EnumLicenseEventTypeWithAggregatesFilter<"LicenseEvent"> | $Enums.LicenseEventType
    ipAddress?: StringNullableWithAggregatesFilter<"LicenseEvent"> | string | null
    userAgent?: StringNullableWithAggregatesFilter<"LicenseEvent"> | string | null
    details?: StringNullableWithAggregatesFilter<"LicenseEvent"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"LicenseEvent"> | Date | string
  }

  export type AdminCreateInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminCreateManyInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerCreateInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    company?: string | null
    address?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    licenses?: LicenseCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    company?: string | null
    address?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    licenses?: LicenseUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    licenses?: LicenseUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    licenses?: LicenseUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateManyInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    company?: string | null
    address?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateInput = {
    id?: string
    name: string
    code: string
    description?: string | null
    version?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    licenses?: LicenseCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: string
    name: string
    code: string
    description?: string | null
    version?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    licenses?: LicenseUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    licenses?: LicenseUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    licenses?: LicenseUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: string
    name: string
    code: string
    description?: string | null
    version?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LicenseCreateInput = {
    id?: string
    licenseKey: string
    type?: $Enums.LicenseType
    status?: $Enums.LicenseStatus
    issuedAt?: Date | string
    expiresAt?: Date | string | null
    maxInstallations?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutLicensesInput
    product: ProductCreateNestedOneWithoutLicensesInput
    installations?: InstallationCreateNestedManyWithoutLicenseInput
    events?: LicenseEventCreateNestedManyWithoutLicenseInput
  }

  export type LicenseUncheckedCreateInput = {
    id?: string
    licenseKey: string
    type?: $Enums.LicenseType
    status?: $Enums.LicenseStatus
    issuedAt?: Date | string
    expiresAt?: Date | string | null
    maxInstallations?: number
    customerId: string
    productId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    installations?: InstallationUncheckedCreateNestedManyWithoutLicenseInput
    events?: LicenseEventUncheckedCreateNestedManyWithoutLicenseInput
  }

  export type LicenseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    licenseKey?: StringFieldUpdateOperationsInput | string
    type?: EnumLicenseTypeFieldUpdateOperationsInput | $Enums.LicenseType
    status?: EnumLicenseStatusFieldUpdateOperationsInput | $Enums.LicenseStatus
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxInstallations?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutLicensesNestedInput
    product?: ProductUpdateOneRequiredWithoutLicensesNestedInput
    installations?: InstallationUpdateManyWithoutLicenseNestedInput
    events?: LicenseEventUpdateManyWithoutLicenseNestedInput
  }

  export type LicenseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    licenseKey?: StringFieldUpdateOperationsInput | string
    type?: EnumLicenseTypeFieldUpdateOperationsInput | $Enums.LicenseType
    status?: EnumLicenseStatusFieldUpdateOperationsInput | $Enums.LicenseStatus
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxInstallations?: IntFieldUpdateOperationsInput | number
    customerId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    installations?: InstallationUncheckedUpdateManyWithoutLicenseNestedInput
    events?: LicenseEventUncheckedUpdateManyWithoutLicenseNestedInput
  }

  export type LicenseCreateManyInput = {
    id?: string
    licenseKey: string
    type?: $Enums.LicenseType
    status?: $Enums.LicenseStatus
    issuedAt?: Date | string
    expiresAt?: Date | string | null
    maxInstallations?: number
    customerId: string
    productId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LicenseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    licenseKey?: StringFieldUpdateOperationsInput | string
    type?: EnumLicenseTypeFieldUpdateOperationsInput | $Enums.LicenseType
    status?: EnumLicenseStatusFieldUpdateOperationsInput | $Enums.LicenseStatus
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxInstallations?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LicenseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    licenseKey?: StringFieldUpdateOperationsInput | string
    type?: EnumLicenseTypeFieldUpdateOperationsInput | $Enums.LicenseType
    status?: EnumLicenseStatusFieldUpdateOperationsInput | $Enums.LicenseStatus
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxInstallations?: IntFieldUpdateOperationsInput | number
    customerId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstallationCreateInput = {
    id?: string
    machineId: string
    deviceName?: string | null
    operatingSystem?: string | null
    appVersion?: string | null
    activatedAt?: Date | string
    lastSeenAt?: Date | string | null
    deactivatedAt?: Date | string | null
    status?: $Enums.InstallationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    license: LicenseCreateNestedOneWithoutInstallationsInput
    events?: LicenseEventCreateNestedManyWithoutInstallationInput
  }

  export type InstallationUncheckedCreateInput = {
    id?: string
    licenseId: string
    machineId: string
    deviceName?: string | null
    operatingSystem?: string | null
    appVersion?: string | null
    activatedAt?: Date | string
    lastSeenAt?: Date | string | null
    deactivatedAt?: Date | string | null
    status?: $Enums.InstallationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: LicenseEventUncheckedCreateNestedManyWithoutInstallationInput
  }

  export type InstallationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    machineId?: StringFieldUpdateOperationsInput | string
    deviceName?: NullableStringFieldUpdateOperationsInput | string | null
    operatingSystem?: NullableStringFieldUpdateOperationsInput | string | null
    appVersion?: NullableStringFieldUpdateOperationsInput | string | null
    activatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deactivatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumInstallationStatusFieldUpdateOperationsInput | $Enums.InstallationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    license?: LicenseUpdateOneRequiredWithoutInstallationsNestedInput
    events?: LicenseEventUpdateManyWithoutInstallationNestedInput
  }

  export type InstallationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    licenseId?: StringFieldUpdateOperationsInput | string
    machineId?: StringFieldUpdateOperationsInput | string
    deviceName?: NullableStringFieldUpdateOperationsInput | string | null
    operatingSystem?: NullableStringFieldUpdateOperationsInput | string | null
    appVersion?: NullableStringFieldUpdateOperationsInput | string | null
    activatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deactivatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumInstallationStatusFieldUpdateOperationsInput | $Enums.InstallationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: LicenseEventUncheckedUpdateManyWithoutInstallationNestedInput
  }

  export type InstallationCreateManyInput = {
    id?: string
    licenseId: string
    machineId: string
    deviceName?: string | null
    operatingSystem?: string | null
    appVersion?: string | null
    activatedAt?: Date | string
    lastSeenAt?: Date | string | null
    deactivatedAt?: Date | string | null
    status?: $Enums.InstallationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InstallationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    machineId?: StringFieldUpdateOperationsInput | string
    deviceName?: NullableStringFieldUpdateOperationsInput | string | null
    operatingSystem?: NullableStringFieldUpdateOperationsInput | string | null
    appVersion?: NullableStringFieldUpdateOperationsInput | string | null
    activatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deactivatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumInstallationStatusFieldUpdateOperationsInput | $Enums.InstallationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstallationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    licenseId?: StringFieldUpdateOperationsInput | string
    machineId?: StringFieldUpdateOperationsInput | string
    deviceName?: NullableStringFieldUpdateOperationsInput | string | null
    operatingSystem?: NullableStringFieldUpdateOperationsInput | string | null
    appVersion?: NullableStringFieldUpdateOperationsInput | string | null
    activatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deactivatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumInstallationStatusFieldUpdateOperationsInput | $Enums.InstallationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LicenseEventCreateInput = {
    id?: string
    type: $Enums.LicenseEventType
    ipAddress?: string | null
    userAgent?: string | null
    details?: string | null
    createdAt?: Date | string
    license: LicenseCreateNestedOneWithoutEventsInput
    installation?: InstallationCreateNestedOneWithoutEventsInput
  }

  export type LicenseEventUncheckedCreateInput = {
    id?: string
    licenseId: string
    installationId?: string | null
    type: $Enums.LicenseEventType
    ipAddress?: string | null
    userAgent?: string | null
    details?: string | null
    createdAt?: Date | string
  }

  export type LicenseEventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumLicenseEventTypeFieldUpdateOperationsInput | $Enums.LicenseEventType
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    license?: LicenseUpdateOneRequiredWithoutEventsNestedInput
    installation?: InstallationUpdateOneWithoutEventsNestedInput
  }

  export type LicenseEventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    licenseId?: StringFieldUpdateOperationsInput | string
    installationId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumLicenseEventTypeFieldUpdateOperationsInput | $Enums.LicenseEventType
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LicenseEventCreateManyInput = {
    id?: string
    licenseId: string
    installationId?: string | null
    type: $Enums.LicenseEventType
    ipAddress?: string | null
    userAgent?: string | null
    details?: string | null
    createdAt?: Date | string
  }

  export type LicenseEventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumLicenseEventTypeFieldUpdateOperationsInput | $Enums.LicenseEventType
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LicenseEventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    licenseId?: StringFieldUpdateOperationsInput | string
    installationId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumLicenseEventTypeFieldUpdateOperationsInput | $Enums.LicenseEventType
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type LicenseListRelationFilter = {
    every?: LicenseWhereInput
    some?: LicenseWhereInput
    none?: LicenseWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type LicenseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    company?: SortOrder
    address?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    company?: SortOrder
    address?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    company?: SortOrder
    address?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    description?: SortOrder
    version?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    description?: SortOrder
    version?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    code?: SortOrder
    description?: SortOrder
    version?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumLicenseTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LicenseType | EnumLicenseTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LicenseType[] | ListEnumLicenseTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LicenseType[] | ListEnumLicenseTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLicenseTypeFilter<$PrismaModel> | $Enums.LicenseType
  }

  export type EnumLicenseStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LicenseStatus | EnumLicenseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LicenseStatus[] | ListEnumLicenseStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LicenseStatus[] | ListEnumLicenseStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLicenseStatusFilter<$PrismaModel> | $Enums.LicenseStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
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

  export type CustomerScalarRelationFilter = {
    is?: CustomerWhereInput
    isNot?: CustomerWhereInput
  }

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type InstallationListRelationFilter = {
    every?: InstallationWhereInput
    some?: InstallationWhereInput
    none?: InstallationWhereInput
  }

  export type LicenseEventListRelationFilter = {
    every?: LicenseEventWhereInput
    some?: LicenseEventWhereInput
    none?: LicenseEventWhereInput
  }

  export type InstallationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LicenseEventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LicenseCountOrderByAggregateInput = {
    id?: SortOrder
    licenseKey?: SortOrder
    type?: SortOrder
    status?: SortOrder
    issuedAt?: SortOrder
    expiresAt?: SortOrder
    maxInstallations?: SortOrder
    customerId?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LicenseAvgOrderByAggregateInput = {
    maxInstallations?: SortOrder
  }

  export type LicenseMaxOrderByAggregateInput = {
    id?: SortOrder
    licenseKey?: SortOrder
    type?: SortOrder
    status?: SortOrder
    issuedAt?: SortOrder
    expiresAt?: SortOrder
    maxInstallations?: SortOrder
    customerId?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LicenseMinOrderByAggregateInput = {
    id?: SortOrder
    licenseKey?: SortOrder
    type?: SortOrder
    status?: SortOrder
    issuedAt?: SortOrder
    expiresAt?: SortOrder
    maxInstallations?: SortOrder
    customerId?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type LicenseSumOrderByAggregateInput = {
    maxInstallations?: SortOrder
  }

  export type EnumLicenseTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LicenseType | EnumLicenseTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LicenseType[] | ListEnumLicenseTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LicenseType[] | ListEnumLicenseTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLicenseTypeWithAggregatesFilter<$PrismaModel> | $Enums.LicenseType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLicenseTypeFilter<$PrismaModel>
    _max?: NestedEnumLicenseTypeFilter<$PrismaModel>
  }

  export type EnumLicenseStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LicenseStatus | EnumLicenseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LicenseStatus[] | ListEnumLicenseStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LicenseStatus[] | ListEnumLicenseStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLicenseStatusWithAggregatesFilter<$PrismaModel> | $Enums.LicenseStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLicenseStatusFilter<$PrismaModel>
    _max?: NestedEnumLicenseStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type EnumInstallationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InstallationStatus | EnumInstallationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InstallationStatus[] | ListEnumInstallationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InstallationStatus[] | ListEnumInstallationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInstallationStatusFilter<$PrismaModel> | $Enums.InstallationStatus
  }

  export type LicenseScalarRelationFilter = {
    is?: LicenseWhereInput
    isNot?: LicenseWhereInput
  }

  export type InstallationLicenseIdMachineIdCompoundUniqueInput = {
    licenseId: string
    machineId: string
  }

  export type InstallationCountOrderByAggregateInput = {
    id?: SortOrder
    licenseId?: SortOrder
    machineId?: SortOrder
    deviceName?: SortOrder
    operatingSystem?: SortOrder
    appVersion?: SortOrder
    activatedAt?: SortOrder
    lastSeenAt?: SortOrder
    deactivatedAt?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InstallationMaxOrderByAggregateInput = {
    id?: SortOrder
    licenseId?: SortOrder
    machineId?: SortOrder
    deviceName?: SortOrder
    operatingSystem?: SortOrder
    appVersion?: SortOrder
    activatedAt?: SortOrder
    lastSeenAt?: SortOrder
    deactivatedAt?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InstallationMinOrderByAggregateInput = {
    id?: SortOrder
    licenseId?: SortOrder
    machineId?: SortOrder
    deviceName?: SortOrder
    operatingSystem?: SortOrder
    appVersion?: SortOrder
    activatedAt?: SortOrder
    lastSeenAt?: SortOrder
    deactivatedAt?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumInstallationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InstallationStatus | EnumInstallationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InstallationStatus[] | ListEnumInstallationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InstallationStatus[] | ListEnumInstallationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInstallationStatusWithAggregatesFilter<$PrismaModel> | $Enums.InstallationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInstallationStatusFilter<$PrismaModel>
    _max?: NestedEnumInstallationStatusFilter<$PrismaModel>
  }

  export type EnumLicenseEventTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LicenseEventType | EnumLicenseEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LicenseEventType[] | ListEnumLicenseEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LicenseEventType[] | ListEnumLicenseEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLicenseEventTypeFilter<$PrismaModel> | $Enums.LicenseEventType
  }

  export type InstallationNullableScalarRelationFilter = {
    is?: InstallationWhereInput | null
    isNot?: InstallationWhereInput | null
  }

  export type LicenseEventCountOrderByAggregateInput = {
    id?: SortOrder
    licenseId?: SortOrder
    installationId?: SortOrder
    type?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    details?: SortOrder
    createdAt?: SortOrder
  }

  export type LicenseEventMaxOrderByAggregateInput = {
    id?: SortOrder
    licenseId?: SortOrder
    installationId?: SortOrder
    type?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    details?: SortOrder
    createdAt?: SortOrder
  }

  export type LicenseEventMinOrderByAggregateInput = {
    id?: SortOrder
    licenseId?: SortOrder
    installationId?: SortOrder
    type?: SortOrder
    ipAddress?: SortOrder
    userAgent?: SortOrder
    details?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumLicenseEventTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LicenseEventType | EnumLicenseEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LicenseEventType[] | ListEnumLicenseEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LicenseEventType[] | ListEnumLicenseEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLicenseEventTypeWithAggregatesFilter<$PrismaModel> | $Enums.LicenseEventType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLicenseEventTypeFilter<$PrismaModel>
    _max?: NestedEnumLicenseEventTypeFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type LicenseCreateNestedManyWithoutCustomerInput = {
    create?: XOR<LicenseCreateWithoutCustomerInput, LicenseUncheckedCreateWithoutCustomerInput> | LicenseCreateWithoutCustomerInput[] | LicenseUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: LicenseCreateOrConnectWithoutCustomerInput | LicenseCreateOrConnectWithoutCustomerInput[]
    createMany?: LicenseCreateManyCustomerInputEnvelope
    connect?: LicenseWhereUniqueInput | LicenseWhereUniqueInput[]
  }

  export type LicenseUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<LicenseCreateWithoutCustomerInput, LicenseUncheckedCreateWithoutCustomerInput> | LicenseCreateWithoutCustomerInput[] | LicenseUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: LicenseCreateOrConnectWithoutCustomerInput | LicenseCreateOrConnectWithoutCustomerInput[]
    createMany?: LicenseCreateManyCustomerInputEnvelope
    connect?: LicenseWhereUniqueInput | LicenseWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type LicenseUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<LicenseCreateWithoutCustomerInput, LicenseUncheckedCreateWithoutCustomerInput> | LicenseCreateWithoutCustomerInput[] | LicenseUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: LicenseCreateOrConnectWithoutCustomerInput | LicenseCreateOrConnectWithoutCustomerInput[]
    upsert?: LicenseUpsertWithWhereUniqueWithoutCustomerInput | LicenseUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: LicenseCreateManyCustomerInputEnvelope
    set?: LicenseWhereUniqueInput | LicenseWhereUniqueInput[]
    disconnect?: LicenseWhereUniqueInput | LicenseWhereUniqueInput[]
    delete?: LicenseWhereUniqueInput | LicenseWhereUniqueInput[]
    connect?: LicenseWhereUniqueInput | LicenseWhereUniqueInput[]
    update?: LicenseUpdateWithWhereUniqueWithoutCustomerInput | LicenseUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: LicenseUpdateManyWithWhereWithoutCustomerInput | LicenseUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: LicenseScalarWhereInput | LicenseScalarWhereInput[]
  }

  export type LicenseUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<LicenseCreateWithoutCustomerInput, LicenseUncheckedCreateWithoutCustomerInput> | LicenseCreateWithoutCustomerInput[] | LicenseUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: LicenseCreateOrConnectWithoutCustomerInput | LicenseCreateOrConnectWithoutCustomerInput[]
    upsert?: LicenseUpsertWithWhereUniqueWithoutCustomerInput | LicenseUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: LicenseCreateManyCustomerInputEnvelope
    set?: LicenseWhereUniqueInput | LicenseWhereUniqueInput[]
    disconnect?: LicenseWhereUniqueInput | LicenseWhereUniqueInput[]
    delete?: LicenseWhereUniqueInput | LicenseWhereUniqueInput[]
    connect?: LicenseWhereUniqueInput | LicenseWhereUniqueInput[]
    update?: LicenseUpdateWithWhereUniqueWithoutCustomerInput | LicenseUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: LicenseUpdateManyWithWhereWithoutCustomerInput | LicenseUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: LicenseScalarWhereInput | LicenseScalarWhereInput[]
  }

  export type LicenseCreateNestedManyWithoutProductInput = {
    create?: XOR<LicenseCreateWithoutProductInput, LicenseUncheckedCreateWithoutProductInput> | LicenseCreateWithoutProductInput[] | LicenseUncheckedCreateWithoutProductInput[]
    connectOrCreate?: LicenseCreateOrConnectWithoutProductInput | LicenseCreateOrConnectWithoutProductInput[]
    createMany?: LicenseCreateManyProductInputEnvelope
    connect?: LicenseWhereUniqueInput | LicenseWhereUniqueInput[]
  }

  export type LicenseUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<LicenseCreateWithoutProductInput, LicenseUncheckedCreateWithoutProductInput> | LicenseCreateWithoutProductInput[] | LicenseUncheckedCreateWithoutProductInput[]
    connectOrCreate?: LicenseCreateOrConnectWithoutProductInput | LicenseCreateOrConnectWithoutProductInput[]
    createMany?: LicenseCreateManyProductInputEnvelope
    connect?: LicenseWhereUniqueInput | LicenseWhereUniqueInput[]
  }

  export type LicenseUpdateManyWithoutProductNestedInput = {
    create?: XOR<LicenseCreateWithoutProductInput, LicenseUncheckedCreateWithoutProductInput> | LicenseCreateWithoutProductInput[] | LicenseUncheckedCreateWithoutProductInput[]
    connectOrCreate?: LicenseCreateOrConnectWithoutProductInput | LicenseCreateOrConnectWithoutProductInput[]
    upsert?: LicenseUpsertWithWhereUniqueWithoutProductInput | LicenseUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: LicenseCreateManyProductInputEnvelope
    set?: LicenseWhereUniqueInput | LicenseWhereUniqueInput[]
    disconnect?: LicenseWhereUniqueInput | LicenseWhereUniqueInput[]
    delete?: LicenseWhereUniqueInput | LicenseWhereUniqueInput[]
    connect?: LicenseWhereUniqueInput | LicenseWhereUniqueInput[]
    update?: LicenseUpdateWithWhereUniqueWithoutProductInput | LicenseUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: LicenseUpdateManyWithWhereWithoutProductInput | LicenseUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: LicenseScalarWhereInput | LicenseScalarWhereInput[]
  }

  export type LicenseUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<LicenseCreateWithoutProductInput, LicenseUncheckedCreateWithoutProductInput> | LicenseCreateWithoutProductInput[] | LicenseUncheckedCreateWithoutProductInput[]
    connectOrCreate?: LicenseCreateOrConnectWithoutProductInput | LicenseCreateOrConnectWithoutProductInput[]
    upsert?: LicenseUpsertWithWhereUniqueWithoutProductInput | LicenseUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: LicenseCreateManyProductInputEnvelope
    set?: LicenseWhereUniqueInput | LicenseWhereUniqueInput[]
    disconnect?: LicenseWhereUniqueInput | LicenseWhereUniqueInput[]
    delete?: LicenseWhereUniqueInput | LicenseWhereUniqueInput[]
    connect?: LicenseWhereUniqueInput | LicenseWhereUniqueInput[]
    update?: LicenseUpdateWithWhereUniqueWithoutProductInput | LicenseUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: LicenseUpdateManyWithWhereWithoutProductInput | LicenseUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: LicenseScalarWhereInput | LicenseScalarWhereInput[]
  }

  export type CustomerCreateNestedOneWithoutLicensesInput = {
    create?: XOR<CustomerCreateWithoutLicensesInput, CustomerUncheckedCreateWithoutLicensesInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutLicensesInput
    connect?: CustomerWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutLicensesInput = {
    create?: XOR<ProductCreateWithoutLicensesInput, ProductUncheckedCreateWithoutLicensesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutLicensesInput
    connect?: ProductWhereUniqueInput
  }

  export type InstallationCreateNestedManyWithoutLicenseInput = {
    create?: XOR<InstallationCreateWithoutLicenseInput, InstallationUncheckedCreateWithoutLicenseInput> | InstallationCreateWithoutLicenseInput[] | InstallationUncheckedCreateWithoutLicenseInput[]
    connectOrCreate?: InstallationCreateOrConnectWithoutLicenseInput | InstallationCreateOrConnectWithoutLicenseInput[]
    createMany?: InstallationCreateManyLicenseInputEnvelope
    connect?: InstallationWhereUniqueInput | InstallationWhereUniqueInput[]
  }

  export type LicenseEventCreateNestedManyWithoutLicenseInput = {
    create?: XOR<LicenseEventCreateWithoutLicenseInput, LicenseEventUncheckedCreateWithoutLicenseInput> | LicenseEventCreateWithoutLicenseInput[] | LicenseEventUncheckedCreateWithoutLicenseInput[]
    connectOrCreate?: LicenseEventCreateOrConnectWithoutLicenseInput | LicenseEventCreateOrConnectWithoutLicenseInput[]
    createMany?: LicenseEventCreateManyLicenseInputEnvelope
    connect?: LicenseEventWhereUniqueInput | LicenseEventWhereUniqueInput[]
  }

  export type InstallationUncheckedCreateNestedManyWithoutLicenseInput = {
    create?: XOR<InstallationCreateWithoutLicenseInput, InstallationUncheckedCreateWithoutLicenseInput> | InstallationCreateWithoutLicenseInput[] | InstallationUncheckedCreateWithoutLicenseInput[]
    connectOrCreate?: InstallationCreateOrConnectWithoutLicenseInput | InstallationCreateOrConnectWithoutLicenseInput[]
    createMany?: InstallationCreateManyLicenseInputEnvelope
    connect?: InstallationWhereUniqueInput | InstallationWhereUniqueInput[]
  }

  export type LicenseEventUncheckedCreateNestedManyWithoutLicenseInput = {
    create?: XOR<LicenseEventCreateWithoutLicenseInput, LicenseEventUncheckedCreateWithoutLicenseInput> | LicenseEventCreateWithoutLicenseInput[] | LicenseEventUncheckedCreateWithoutLicenseInput[]
    connectOrCreate?: LicenseEventCreateOrConnectWithoutLicenseInput | LicenseEventCreateOrConnectWithoutLicenseInput[]
    createMany?: LicenseEventCreateManyLicenseInputEnvelope
    connect?: LicenseEventWhereUniqueInput | LicenseEventWhereUniqueInput[]
  }

  export type EnumLicenseTypeFieldUpdateOperationsInput = {
    set?: $Enums.LicenseType
  }

  export type EnumLicenseStatusFieldUpdateOperationsInput = {
    set?: $Enums.LicenseStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CustomerUpdateOneRequiredWithoutLicensesNestedInput = {
    create?: XOR<CustomerCreateWithoutLicensesInput, CustomerUncheckedCreateWithoutLicensesInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutLicensesInput
    upsert?: CustomerUpsertWithoutLicensesInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutLicensesInput, CustomerUpdateWithoutLicensesInput>, CustomerUncheckedUpdateWithoutLicensesInput>
  }

  export type ProductUpdateOneRequiredWithoutLicensesNestedInput = {
    create?: XOR<ProductCreateWithoutLicensesInput, ProductUncheckedCreateWithoutLicensesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutLicensesInput
    upsert?: ProductUpsertWithoutLicensesInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutLicensesInput, ProductUpdateWithoutLicensesInput>, ProductUncheckedUpdateWithoutLicensesInput>
  }

  export type InstallationUpdateManyWithoutLicenseNestedInput = {
    create?: XOR<InstallationCreateWithoutLicenseInput, InstallationUncheckedCreateWithoutLicenseInput> | InstallationCreateWithoutLicenseInput[] | InstallationUncheckedCreateWithoutLicenseInput[]
    connectOrCreate?: InstallationCreateOrConnectWithoutLicenseInput | InstallationCreateOrConnectWithoutLicenseInput[]
    upsert?: InstallationUpsertWithWhereUniqueWithoutLicenseInput | InstallationUpsertWithWhereUniqueWithoutLicenseInput[]
    createMany?: InstallationCreateManyLicenseInputEnvelope
    set?: InstallationWhereUniqueInput | InstallationWhereUniqueInput[]
    disconnect?: InstallationWhereUniqueInput | InstallationWhereUniqueInput[]
    delete?: InstallationWhereUniqueInput | InstallationWhereUniqueInput[]
    connect?: InstallationWhereUniqueInput | InstallationWhereUniqueInput[]
    update?: InstallationUpdateWithWhereUniqueWithoutLicenseInput | InstallationUpdateWithWhereUniqueWithoutLicenseInput[]
    updateMany?: InstallationUpdateManyWithWhereWithoutLicenseInput | InstallationUpdateManyWithWhereWithoutLicenseInput[]
    deleteMany?: InstallationScalarWhereInput | InstallationScalarWhereInput[]
  }

  export type LicenseEventUpdateManyWithoutLicenseNestedInput = {
    create?: XOR<LicenseEventCreateWithoutLicenseInput, LicenseEventUncheckedCreateWithoutLicenseInput> | LicenseEventCreateWithoutLicenseInput[] | LicenseEventUncheckedCreateWithoutLicenseInput[]
    connectOrCreate?: LicenseEventCreateOrConnectWithoutLicenseInput | LicenseEventCreateOrConnectWithoutLicenseInput[]
    upsert?: LicenseEventUpsertWithWhereUniqueWithoutLicenseInput | LicenseEventUpsertWithWhereUniqueWithoutLicenseInput[]
    createMany?: LicenseEventCreateManyLicenseInputEnvelope
    set?: LicenseEventWhereUniqueInput | LicenseEventWhereUniqueInput[]
    disconnect?: LicenseEventWhereUniqueInput | LicenseEventWhereUniqueInput[]
    delete?: LicenseEventWhereUniqueInput | LicenseEventWhereUniqueInput[]
    connect?: LicenseEventWhereUniqueInput | LicenseEventWhereUniqueInput[]
    update?: LicenseEventUpdateWithWhereUniqueWithoutLicenseInput | LicenseEventUpdateWithWhereUniqueWithoutLicenseInput[]
    updateMany?: LicenseEventUpdateManyWithWhereWithoutLicenseInput | LicenseEventUpdateManyWithWhereWithoutLicenseInput[]
    deleteMany?: LicenseEventScalarWhereInput | LicenseEventScalarWhereInput[]
  }

  export type InstallationUncheckedUpdateManyWithoutLicenseNestedInput = {
    create?: XOR<InstallationCreateWithoutLicenseInput, InstallationUncheckedCreateWithoutLicenseInput> | InstallationCreateWithoutLicenseInput[] | InstallationUncheckedCreateWithoutLicenseInput[]
    connectOrCreate?: InstallationCreateOrConnectWithoutLicenseInput | InstallationCreateOrConnectWithoutLicenseInput[]
    upsert?: InstallationUpsertWithWhereUniqueWithoutLicenseInput | InstallationUpsertWithWhereUniqueWithoutLicenseInput[]
    createMany?: InstallationCreateManyLicenseInputEnvelope
    set?: InstallationWhereUniqueInput | InstallationWhereUniqueInput[]
    disconnect?: InstallationWhereUniqueInput | InstallationWhereUniqueInput[]
    delete?: InstallationWhereUniqueInput | InstallationWhereUniqueInput[]
    connect?: InstallationWhereUniqueInput | InstallationWhereUniqueInput[]
    update?: InstallationUpdateWithWhereUniqueWithoutLicenseInput | InstallationUpdateWithWhereUniqueWithoutLicenseInput[]
    updateMany?: InstallationUpdateManyWithWhereWithoutLicenseInput | InstallationUpdateManyWithWhereWithoutLicenseInput[]
    deleteMany?: InstallationScalarWhereInput | InstallationScalarWhereInput[]
  }

  export type LicenseEventUncheckedUpdateManyWithoutLicenseNestedInput = {
    create?: XOR<LicenseEventCreateWithoutLicenseInput, LicenseEventUncheckedCreateWithoutLicenseInput> | LicenseEventCreateWithoutLicenseInput[] | LicenseEventUncheckedCreateWithoutLicenseInput[]
    connectOrCreate?: LicenseEventCreateOrConnectWithoutLicenseInput | LicenseEventCreateOrConnectWithoutLicenseInput[]
    upsert?: LicenseEventUpsertWithWhereUniqueWithoutLicenseInput | LicenseEventUpsertWithWhereUniqueWithoutLicenseInput[]
    createMany?: LicenseEventCreateManyLicenseInputEnvelope
    set?: LicenseEventWhereUniqueInput | LicenseEventWhereUniqueInput[]
    disconnect?: LicenseEventWhereUniqueInput | LicenseEventWhereUniqueInput[]
    delete?: LicenseEventWhereUniqueInput | LicenseEventWhereUniqueInput[]
    connect?: LicenseEventWhereUniqueInput | LicenseEventWhereUniqueInput[]
    update?: LicenseEventUpdateWithWhereUniqueWithoutLicenseInput | LicenseEventUpdateWithWhereUniqueWithoutLicenseInput[]
    updateMany?: LicenseEventUpdateManyWithWhereWithoutLicenseInput | LicenseEventUpdateManyWithWhereWithoutLicenseInput[]
    deleteMany?: LicenseEventScalarWhereInput | LicenseEventScalarWhereInput[]
  }

  export type LicenseCreateNestedOneWithoutInstallationsInput = {
    create?: XOR<LicenseCreateWithoutInstallationsInput, LicenseUncheckedCreateWithoutInstallationsInput>
    connectOrCreate?: LicenseCreateOrConnectWithoutInstallationsInput
    connect?: LicenseWhereUniqueInput
  }

  export type LicenseEventCreateNestedManyWithoutInstallationInput = {
    create?: XOR<LicenseEventCreateWithoutInstallationInput, LicenseEventUncheckedCreateWithoutInstallationInput> | LicenseEventCreateWithoutInstallationInput[] | LicenseEventUncheckedCreateWithoutInstallationInput[]
    connectOrCreate?: LicenseEventCreateOrConnectWithoutInstallationInput | LicenseEventCreateOrConnectWithoutInstallationInput[]
    createMany?: LicenseEventCreateManyInstallationInputEnvelope
    connect?: LicenseEventWhereUniqueInput | LicenseEventWhereUniqueInput[]
  }

  export type LicenseEventUncheckedCreateNestedManyWithoutInstallationInput = {
    create?: XOR<LicenseEventCreateWithoutInstallationInput, LicenseEventUncheckedCreateWithoutInstallationInput> | LicenseEventCreateWithoutInstallationInput[] | LicenseEventUncheckedCreateWithoutInstallationInput[]
    connectOrCreate?: LicenseEventCreateOrConnectWithoutInstallationInput | LicenseEventCreateOrConnectWithoutInstallationInput[]
    createMany?: LicenseEventCreateManyInstallationInputEnvelope
    connect?: LicenseEventWhereUniqueInput | LicenseEventWhereUniqueInput[]
  }

  export type EnumInstallationStatusFieldUpdateOperationsInput = {
    set?: $Enums.InstallationStatus
  }

  export type LicenseUpdateOneRequiredWithoutInstallationsNestedInput = {
    create?: XOR<LicenseCreateWithoutInstallationsInput, LicenseUncheckedCreateWithoutInstallationsInput>
    connectOrCreate?: LicenseCreateOrConnectWithoutInstallationsInput
    upsert?: LicenseUpsertWithoutInstallationsInput
    connect?: LicenseWhereUniqueInput
    update?: XOR<XOR<LicenseUpdateToOneWithWhereWithoutInstallationsInput, LicenseUpdateWithoutInstallationsInput>, LicenseUncheckedUpdateWithoutInstallationsInput>
  }

  export type LicenseEventUpdateManyWithoutInstallationNestedInput = {
    create?: XOR<LicenseEventCreateWithoutInstallationInput, LicenseEventUncheckedCreateWithoutInstallationInput> | LicenseEventCreateWithoutInstallationInput[] | LicenseEventUncheckedCreateWithoutInstallationInput[]
    connectOrCreate?: LicenseEventCreateOrConnectWithoutInstallationInput | LicenseEventCreateOrConnectWithoutInstallationInput[]
    upsert?: LicenseEventUpsertWithWhereUniqueWithoutInstallationInput | LicenseEventUpsertWithWhereUniqueWithoutInstallationInput[]
    createMany?: LicenseEventCreateManyInstallationInputEnvelope
    set?: LicenseEventWhereUniqueInput | LicenseEventWhereUniqueInput[]
    disconnect?: LicenseEventWhereUniqueInput | LicenseEventWhereUniqueInput[]
    delete?: LicenseEventWhereUniqueInput | LicenseEventWhereUniqueInput[]
    connect?: LicenseEventWhereUniqueInput | LicenseEventWhereUniqueInput[]
    update?: LicenseEventUpdateWithWhereUniqueWithoutInstallationInput | LicenseEventUpdateWithWhereUniqueWithoutInstallationInput[]
    updateMany?: LicenseEventUpdateManyWithWhereWithoutInstallationInput | LicenseEventUpdateManyWithWhereWithoutInstallationInput[]
    deleteMany?: LicenseEventScalarWhereInput | LicenseEventScalarWhereInput[]
  }

  export type LicenseEventUncheckedUpdateManyWithoutInstallationNestedInput = {
    create?: XOR<LicenseEventCreateWithoutInstallationInput, LicenseEventUncheckedCreateWithoutInstallationInput> | LicenseEventCreateWithoutInstallationInput[] | LicenseEventUncheckedCreateWithoutInstallationInput[]
    connectOrCreate?: LicenseEventCreateOrConnectWithoutInstallationInput | LicenseEventCreateOrConnectWithoutInstallationInput[]
    upsert?: LicenseEventUpsertWithWhereUniqueWithoutInstallationInput | LicenseEventUpsertWithWhereUniqueWithoutInstallationInput[]
    createMany?: LicenseEventCreateManyInstallationInputEnvelope
    set?: LicenseEventWhereUniqueInput | LicenseEventWhereUniqueInput[]
    disconnect?: LicenseEventWhereUniqueInput | LicenseEventWhereUniqueInput[]
    delete?: LicenseEventWhereUniqueInput | LicenseEventWhereUniqueInput[]
    connect?: LicenseEventWhereUniqueInput | LicenseEventWhereUniqueInput[]
    update?: LicenseEventUpdateWithWhereUniqueWithoutInstallationInput | LicenseEventUpdateWithWhereUniqueWithoutInstallationInput[]
    updateMany?: LicenseEventUpdateManyWithWhereWithoutInstallationInput | LicenseEventUpdateManyWithWhereWithoutInstallationInput[]
    deleteMany?: LicenseEventScalarWhereInput | LicenseEventScalarWhereInput[]
  }

  export type LicenseCreateNestedOneWithoutEventsInput = {
    create?: XOR<LicenseCreateWithoutEventsInput, LicenseUncheckedCreateWithoutEventsInput>
    connectOrCreate?: LicenseCreateOrConnectWithoutEventsInput
    connect?: LicenseWhereUniqueInput
  }

  export type InstallationCreateNestedOneWithoutEventsInput = {
    create?: XOR<InstallationCreateWithoutEventsInput, InstallationUncheckedCreateWithoutEventsInput>
    connectOrCreate?: InstallationCreateOrConnectWithoutEventsInput
    connect?: InstallationWhereUniqueInput
  }

  export type EnumLicenseEventTypeFieldUpdateOperationsInput = {
    set?: $Enums.LicenseEventType
  }

  export type LicenseUpdateOneRequiredWithoutEventsNestedInput = {
    create?: XOR<LicenseCreateWithoutEventsInput, LicenseUncheckedCreateWithoutEventsInput>
    connectOrCreate?: LicenseCreateOrConnectWithoutEventsInput
    upsert?: LicenseUpsertWithoutEventsInput
    connect?: LicenseWhereUniqueInput
    update?: XOR<XOR<LicenseUpdateToOneWithWhereWithoutEventsInput, LicenseUpdateWithoutEventsInput>, LicenseUncheckedUpdateWithoutEventsInput>
  }

  export type InstallationUpdateOneWithoutEventsNestedInput = {
    create?: XOR<InstallationCreateWithoutEventsInput, InstallationUncheckedCreateWithoutEventsInput>
    connectOrCreate?: InstallationCreateOrConnectWithoutEventsInput
    upsert?: InstallationUpsertWithoutEventsInput
    disconnect?: InstallationWhereInput | boolean
    delete?: InstallationWhereInput | boolean
    connect?: InstallationWhereUniqueInput
    update?: XOR<XOR<InstallationUpdateToOneWithWhereWithoutEventsInput, InstallationUpdateWithoutEventsInput>, InstallationUncheckedUpdateWithoutEventsInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumLicenseTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LicenseType | EnumLicenseTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LicenseType[] | ListEnumLicenseTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LicenseType[] | ListEnumLicenseTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLicenseTypeFilter<$PrismaModel> | $Enums.LicenseType
  }

  export type NestedEnumLicenseStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LicenseStatus | EnumLicenseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LicenseStatus[] | ListEnumLicenseStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LicenseStatus[] | ListEnumLicenseStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLicenseStatusFilter<$PrismaModel> | $Enums.LicenseStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumLicenseTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LicenseType | EnumLicenseTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LicenseType[] | ListEnumLicenseTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LicenseType[] | ListEnumLicenseTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLicenseTypeWithAggregatesFilter<$PrismaModel> | $Enums.LicenseType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLicenseTypeFilter<$PrismaModel>
    _max?: NestedEnumLicenseTypeFilter<$PrismaModel>
  }

  export type NestedEnumLicenseStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LicenseStatus | EnumLicenseStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LicenseStatus[] | ListEnumLicenseStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LicenseStatus[] | ListEnumLicenseStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLicenseStatusWithAggregatesFilter<$PrismaModel> | $Enums.LicenseStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLicenseStatusFilter<$PrismaModel>
    _max?: NestedEnumLicenseStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
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

  export type NestedEnumInstallationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InstallationStatus | EnumInstallationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InstallationStatus[] | ListEnumInstallationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InstallationStatus[] | ListEnumInstallationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInstallationStatusFilter<$PrismaModel> | $Enums.InstallationStatus
  }

  export type NestedEnumInstallationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InstallationStatus | EnumInstallationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InstallationStatus[] | ListEnumInstallationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InstallationStatus[] | ListEnumInstallationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInstallationStatusWithAggregatesFilter<$PrismaModel> | $Enums.InstallationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInstallationStatusFilter<$PrismaModel>
    _max?: NestedEnumInstallationStatusFilter<$PrismaModel>
  }

  export type NestedEnumLicenseEventTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LicenseEventType | EnumLicenseEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LicenseEventType[] | ListEnumLicenseEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LicenseEventType[] | ListEnumLicenseEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLicenseEventTypeFilter<$PrismaModel> | $Enums.LicenseEventType
  }

  export type NestedEnumLicenseEventTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LicenseEventType | EnumLicenseEventTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LicenseEventType[] | ListEnumLicenseEventTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LicenseEventType[] | ListEnumLicenseEventTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLicenseEventTypeWithAggregatesFilter<$PrismaModel> | $Enums.LicenseEventType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLicenseEventTypeFilter<$PrismaModel>
    _max?: NestedEnumLicenseEventTypeFilter<$PrismaModel>
  }

  export type LicenseCreateWithoutCustomerInput = {
    id?: string
    licenseKey: string
    type?: $Enums.LicenseType
    status?: $Enums.LicenseStatus
    issuedAt?: Date | string
    expiresAt?: Date | string | null
    maxInstallations?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutLicensesInput
    installations?: InstallationCreateNestedManyWithoutLicenseInput
    events?: LicenseEventCreateNestedManyWithoutLicenseInput
  }

  export type LicenseUncheckedCreateWithoutCustomerInput = {
    id?: string
    licenseKey: string
    type?: $Enums.LicenseType
    status?: $Enums.LicenseStatus
    issuedAt?: Date | string
    expiresAt?: Date | string | null
    maxInstallations?: number
    productId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    installations?: InstallationUncheckedCreateNestedManyWithoutLicenseInput
    events?: LicenseEventUncheckedCreateNestedManyWithoutLicenseInput
  }

  export type LicenseCreateOrConnectWithoutCustomerInput = {
    where: LicenseWhereUniqueInput
    create: XOR<LicenseCreateWithoutCustomerInput, LicenseUncheckedCreateWithoutCustomerInput>
  }

  export type LicenseCreateManyCustomerInputEnvelope = {
    data: LicenseCreateManyCustomerInput | LicenseCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type LicenseUpsertWithWhereUniqueWithoutCustomerInput = {
    where: LicenseWhereUniqueInput
    update: XOR<LicenseUpdateWithoutCustomerInput, LicenseUncheckedUpdateWithoutCustomerInput>
    create: XOR<LicenseCreateWithoutCustomerInput, LicenseUncheckedCreateWithoutCustomerInput>
  }

  export type LicenseUpdateWithWhereUniqueWithoutCustomerInput = {
    where: LicenseWhereUniqueInput
    data: XOR<LicenseUpdateWithoutCustomerInput, LicenseUncheckedUpdateWithoutCustomerInput>
  }

  export type LicenseUpdateManyWithWhereWithoutCustomerInput = {
    where: LicenseScalarWhereInput
    data: XOR<LicenseUpdateManyMutationInput, LicenseUncheckedUpdateManyWithoutCustomerInput>
  }

  export type LicenseScalarWhereInput = {
    AND?: LicenseScalarWhereInput | LicenseScalarWhereInput[]
    OR?: LicenseScalarWhereInput[]
    NOT?: LicenseScalarWhereInput | LicenseScalarWhereInput[]
    id?: StringFilter<"License"> | string
    licenseKey?: StringFilter<"License"> | string
    type?: EnumLicenseTypeFilter<"License"> | $Enums.LicenseType
    status?: EnumLicenseStatusFilter<"License"> | $Enums.LicenseStatus
    issuedAt?: DateTimeFilter<"License"> | Date | string
    expiresAt?: DateTimeNullableFilter<"License"> | Date | string | null
    maxInstallations?: IntFilter<"License"> | number
    customerId?: StringFilter<"License"> | string
    productId?: StringFilter<"License"> | string
    createdAt?: DateTimeFilter<"License"> | Date | string
    updatedAt?: DateTimeFilter<"License"> | Date | string
  }

  export type LicenseCreateWithoutProductInput = {
    id?: string
    licenseKey: string
    type?: $Enums.LicenseType
    status?: $Enums.LicenseStatus
    issuedAt?: Date | string
    expiresAt?: Date | string | null
    maxInstallations?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutLicensesInput
    installations?: InstallationCreateNestedManyWithoutLicenseInput
    events?: LicenseEventCreateNestedManyWithoutLicenseInput
  }

  export type LicenseUncheckedCreateWithoutProductInput = {
    id?: string
    licenseKey: string
    type?: $Enums.LicenseType
    status?: $Enums.LicenseStatus
    issuedAt?: Date | string
    expiresAt?: Date | string | null
    maxInstallations?: number
    customerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    installations?: InstallationUncheckedCreateNestedManyWithoutLicenseInput
    events?: LicenseEventUncheckedCreateNestedManyWithoutLicenseInput
  }

  export type LicenseCreateOrConnectWithoutProductInput = {
    where: LicenseWhereUniqueInput
    create: XOR<LicenseCreateWithoutProductInput, LicenseUncheckedCreateWithoutProductInput>
  }

  export type LicenseCreateManyProductInputEnvelope = {
    data: LicenseCreateManyProductInput | LicenseCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type LicenseUpsertWithWhereUniqueWithoutProductInput = {
    where: LicenseWhereUniqueInput
    update: XOR<LicenseUpdateWithoutProductInput, LicenseUncheckedUpdateWithoutProductInput>
    create: XOR<LicenseCreateWithoutProductInput, LicenseUncheckedCreateWithoutProductInput>
  }

  export type LicenseUpdateWithWhereUniqueWithoutProductInput = {
    where: LicenseWhereUniqueInput
    data: XOR<LicenseUpdateWithoutProductInput, LicenseUncheckedUpdateWithoutProductInput>
  }

  export type LicenseUpdateManyWithWhereWithoutProductInput = {
    where: LicenseScalarWhereInput
    data: XOR<LicenseUpdateManyMutationInput, LicenseUncheckedUpdateManyWithoutProductInput>
  }

  export type CustomerCreateWithoutLicensesInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    company?: string | null
    address?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerUncheckedCreateWithoutLicensesInput = {
    id?: string
    name: string
    email?: string | null
    phone?: string | null
    company?: string | null
    address?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CustomerCreateOrConnectWithoutLicensesInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutLicensesInput, CustomerUncheckedCreateWithoutLicensesInput>
  }

  export type ProductCreateWithoutLicensesInput = {
    id?: string
    name: string
    code: string
    description?: string | null
    version?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUncheckedCreateWithoutLicensesInput = {
    id?: string
    name: string
    code: string
    description?: string | null
    version?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductCreateOrConnectWithoutLicensesInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutLicensesInput, ProductUncheckedCreateWithoutLicensesInput>
  }

  export type InstallationCreateWithoutLicenseInput = {
    id?: string
    machineId: string
    deviceName?: string | null
    operatingSystem?: string | null
    appVersion?: string | null
    activatedAt?: Date | string
    lastSeenAt?: Date | string | null
    deactivatedAt?: Date | string | null
    status?: $Enums.InstallationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: LicenseEventCreateNestedManyWithoutInstallationInput
  }

  export type InstallationUncheckedCreateWithoutLicenseInput = {
    id?: string
    machineId: string
    deviceName?: string | null
    operatingSystem?: string | null
    appVersion?: string | null
    activatedAt?: Date | string
    lastSeenAt?: Date | string | null
    deactivatedAt?: Date | string | null
    status?: $Enums.InstallationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: LicenseEventUncheckedCreateNestedManyWithoutInstallationInput
  }

  export type InstallationCreateOrConnectWithoutLicenseInput = {
    where: InstallationWhereUniqueInput
    create: XOR<InstallationCreateWithoutLicenseInput, InstallationUncheckedCreateWithoutLicenseInput>
  }

  export type InstallationCreateManyLicenseInputEnvelope = {
    data: InstallationCreateManyLicenseInput | InstallationCreateManyLicenseInput[]
    skipDuplicates?: boolean
  }

  export type LicenseEventCreateWithoutLicenseInput = {
    id?: string
    type: $Enums.LicenseEventType
    ipAddress?: string | null
    userAgent?: string | null
    details?: string | null
    createdAt?: Date | string
    installation?: InstallationCreateNestedOneWithoutEventsInput
  }

  export type LicenseEventUncheckedCreateWithoutLicenseInput = {
    id?: string
    installationId?: string | null
    type: $Enums.LicenseEventType
    ipAddress?: string | null
    userAgent?: string | null
    details?: string | null
    createdAt?: Date | string
  }

  export type LicenseEventCreateOrConnectWithoutLicenseInput = {
    where: LicenseEventWhereUniqueInput
    create: XOR<LicenseEventCreateWithoutLicenseInput, LicenseEventUncheckedCreateWithoutLicenseInput>
  }

  export type LicenseEventCreateManyLicenseInputEnvelope = {
    data: LicenseEventCreateManyLicenseInput | LicenseEventCreateManyLicenseInput[]
    skipDuplicates?: boolean
  }

  export type CustomerUpsertWithoutLicensesInput = {
    update: XOR<CustomerUpdateWithoutLicensesInput, CustomerUncheckedUpdateWithoutLicensesInput>
    create: XOR<CustomerCreateWithoutLicensesInput, CustomerUncheckedCreateWithoutLicensesInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutLicensesInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutLicensesInput, CustomerUncheckedUpdateWithoutLicensesInput>
  }

  export type CustomerUpdateWithoutLicensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUncheckedUpdateWithoutLicensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    company?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUpsertWithoutLicensesInput = {
    update: XOR<ProductUpdateWithoutLicensesInput, ProductUncheckedUpdateWithoutLicensesInput>
    create: XOR<ProductCreateWithoutLicensesInput, ProductUncheckedCreateWithoutLicensesInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutLicensesInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutLicensesInput, ProductUncheckedUpdateWithoutLicensesInput>
  }

  export type ProductUpdateWithoutLicensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateWithoutLicensesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    version?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstallationUpsertWithWhereUniqueWithoutLicenseInput = {
    where: InstallationWhereUniqueInput
    update: XOR<InstallationUpdateWithoutLicenseInput, InstallationUncheckedUpdateWithoutLicenseInput>
    create: XOR<InstallationCreateWithoutLicenseInput, InstallationUncheckedCreateWithoutLicenseInput>
  }

  export type InstallationUpdateWithWhereUniqueWithoutLicenseInput = {
    where: InstallationWhereUniqueInput
    data: XOR<InstallationUpdateWithoutLicenseInput, InstallationUncheckedUpdateWithoutLicenseInput>
  }

  export type InstallationUpdateManyWithWhereWithoutLicenseInput = {
    where: InstallationScalarWhereInput
    data: XOR<InstallationUpdateManyMutationInput, InstallationUncheckedUpdateManyWithoutLicenseInput>
  }

  export type InstallationScalarWhereInput = {
    AND?: InstallationScalarWhereInput | InstallationScalarWhereInput[]
    OR?: InstallationScalarWhereInput[]
    NOT?: InstallationScalarWhereInput | InstallationScalarWhereInput[]
    id?: StringFilter<"Installation"> | string
    licenseId?: StringFilter<"Installation"> | string
    machineId?: StringFilter<"Installation"> | string
    deviceName?: StringNullableFilter<"Installation"> | string | null
    operatingSystem?: StringNullableFilter<"Installation"> | string | null
    appVersion?: StringNullableFilter<"Installation"> | string | null
    activatedAt?: DateTimeFilter<"Installation"> | Date | string
    lastSeenAt?: DateTimeNullableFilter<"Installation"> | Date | string | null
    deactivatedAt?: DateTimeNullableFilter<"Installation"> | Date | string | null
    status?: EnumInstallationStatusFilter<"Installation"> | $Enums.InstallationStatus
    createdAt?: DateTimeFilter<"Installation"> | Date | string
    updatedAt?: DateTimeFilter<"Installation"> | Date | string
  }

  export type LicenseEventUpsertWithWhereUniqueWithoutLicenseInput = {
    where: LicenseEventWhereUniqueInput
    update: XOR<LicenseEventUpdateWithoutLicenseInput, LicenseEventUncheckedUpdateWithoutLicenseInput>
    create: XOR<LicenseEventCreateWithoutLicenseInput, LicenseEventUncheckedCreateWithoutLicenseInput>
  }

  export type LicenseEventUpdateWithWhereUniqueWithoutLicenseInput = {
    where: LicenseEventWhereUniqueInput
    data: XOR<LicenseEventUpdateWithoutLicenseInput, LicenseEventUncheckedUpdateWithoutLicenseInput>
  }

  export type LicenseEventUpdateManyWithWhereWithoutLicenseInput = {
    where: LicenseEventScalarWhereInput
    data: XOR<LicenseEventUpdateManyMutationInput, LicenseEventUncheckedUpdateManyWithoutLicenseInput>
  }

  export type LicenseEventScalarWhereInput = {
    AND?: LicenseEventScalarWhereInput | LicenseEventScalarWhereInput[]
    OR?: LicenseEventScalarWhereInput[]
    NOT?: LicenseEventScalarWhereInput | LicenseEventScalarWhereInput[]
    id?: StringFilter<"LicenseEvent"> | string
    licenseId?: StringFilter<"LicenseEvent"> | string
    installationId?: StringNullableFilter<"LicenseEvent"> | string | null
    type?: EnumLicenseEventTypeFilter<"LicenseEvent"> | $Enums.LicenseEventType
    ipAddress?: StringNullableFilter<"LicenseEvent"> | string | null
    userAgent?: StringNullableFilter<"LicenseEvent"> | string | null
    details?: StringNullableFilter<"LicenseEvent"> | string | null
    createdAt?: DateTimeFilter<"LicenseEvent"> | Date | string
  }

  export type LicenseCreateWithoutInstallationsInput = {
    id?: string
    licenseKey: string
    type?: $Enums.LicenseType
    status?: $Enums.LicenseStatus
    issuedAt?: Date | string
    expiresAt?: Date | string | null
    maxInstallations?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutLicensesInput
    product: ProductCreateNestedOneWithoutLicensesInput
    events?: LicenseEventCreateNestedManyWithoutLicenseInput
  }

  export type LicenseUncheckedCreateWithoutInstallationsInput = {
    id?: string
    licenseKey: string
    type?: $Enums.LicenseType
    status?: $Enums.LicenseStatus
    issuedAt?: Date | string
    expiresAt?: Date | string | null
    maxInstallations?: number
    customerId: string
    productId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    events?: LicenseEventUncheckedCreateNestedManyWithoutLicenseInput
  }

  export type LicenseCreateOrConnectWithoutInstallationsInput = {
    where: LicenseWhereUniqueInput
    create: XOR<LicenseCreateWithoutInstallationsInput, LicenseUncheckedCreateWithoutInstallationsInput>
  }

  export type LicenseEventCreateWithoutInstallationInput = {
    id?: string
    type: $Enums.LicenseEventType
    ipAddress?: string | null
    userAgent?: string | null
    details?: string | null
    createdAt?: Date | string
    license: LicenseCreateNestedOneWithoutEventsInput
  }

  export type LicenseEventUncheckedCreateWithoutInstallationInput = {
    id?: string
    licenseId: string
    type: $Enums.LicenseEventType
    ipAddress?: string | null
    userAgent?: string | null
    details?: string | null
    createdAt?: Date | string
  }

  export type LicenseEventCreateOrConnectWithoutInstallationInput = {
    where: LicenseEventWhereUniqueInput
    create: XOR<LicenseEventCreateWithoutInstallationInput, LicenseEventUncheckedCreateWithoutInstallationInput>
  }

  export type LicenseEventCreateManyInstallationInputEnvelope = {
    data: LicenseEventCreateManyInstallationInput | LicenseEventCreateManyInstallationInput[]
    skipDuplicates?: boolean
  }

  export type LicenseUpsertWithoutInstallationsInput = {
    update: XOR<LicenseUpdateWithoutInstallationsInput, LicenseUncheckedUpdateWithoutInstallationsInput>
    create: XOR<LicenseCreateWithoutInstallationsInput, LicenseUncheckedCreateWithoutInstallationsInput>
    where?: LicenseWhereInput
  }

  export type LicenseUpdateToOneWithWhereWithoutInstallationsInput = {
    where?: LicenseWhereInput
    data: XOR<LicenseUpdateWithoutInstallationsInput, LicenseUncheckedUpdateWithoutInstallationsInput>
  }

  export type LicenseUpdateWithoutInstallationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    licenseKey?: StringFieldUpdateOperationsInput | string
    type?: EnumLicenseTypeFieldUpdateOperationsInput | $Enums.LicenseType
    status?: EnumLicenseStatusFieldUpdateOperationsInput | $Enums.LicenseStatus
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxInstallations?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutLicensesNestedInput
    product?: ProductUpdateOneRequiredWithoutLicensesNestedInput
    events?: LicenseEventUpdateManyWithoutLicenseNestedInput
  }

  export type LicenseUncheckedUpdateWithoutInstallationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    licenseKey?: StringFieldUpdateOperationsInput | string
    type?: EnumLicenseTypeFieldUpdateOperationsInput | $Enums.LicenseType
    status?: EnumLicenseStatusFieldUpdateOperationsInput | $Enums.LicenseStatus
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxInstallations?: IntFieldUpdateOperationsInput | number
    customerId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: LicenseEventUncheckedUpdateManyWithoutLicenseNestedInput
  }

  export type LicenseEventUpsertWithWhereUniqueWithoutInstallationInput = {
    where: LicenseEventWhereUniqueInput
    update: XOR<LicenseEventUpdateWithoutInstallationInput, LicenseEventUncheckedUpdateWithoutInstallationInput>
    create: XOR<LicenseEventCreateWithoutInstallationInput, LicenseEventUncheckedCreateWithoutInstallationInput>
  }

  export type LicenseEventUpdateWithWhereUniqueWithoutInstallationInput = {
    where: LicenseEventWhereUniqueInput
    data: XOR<LicenseEventUpdateWithoutInstallationInput, LicenseEventUncheckedUpdateWithoutInstallationInput>
  }

  export type LicenseEventUpdateManyWithWhereWithoutInstallationInput = {
    where: LicenseEventScalarWhereInput
    data: XOR<LicenseEventUpdateManyMutationInput, LicenseEventUncheckedUpdateManyWithoutInstallationInput>
  }

  export type LicenseCreateWithoutEventsInput = {
    id?: string
    licenseKey: string
    type?: $Enums.LicenseType
    status?: $Enums.LicenseStatus
    issuedAt?: Date | string
    expiresAt?: Date | string | null
    maxInstallations?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: CustomerCreateNestedOneWithoutLicensesInput
    product: ProductCreateNestedOneWithoutLicensesInput
    installations?: InstallationCreateNestedManyWithoutLicenseInput
  }

  export type LicenseUncheckedCreateWithoutEventsInput = {
    id?: string
    licenseKey: string
    type?: $Enums.LicenseType
    status?: $Enums.LicenseStatus
    issuedAt?: Date | string
    expiresAt?: Date | string | null
    maxInstallations?: number
    customerId: string
    productId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    installations?: InstallationUncheckedCreateNestedManyWithoutLicenseInput
  }

  export type LicenseCreateOrConnectWithoutEventsInput = {
    where: LicenseWhereUniqueInput
    create: XOR<LicenseCreateWithoutEventsInput, LicenseUncheckedCreateWithoutEventsInput>
  }

  export type InstallationCreateWithoutEventsInput = {
    id?: string
    machineId: string
    deviceName?: string | null
    operatingSystem?: string | null
    appVersion?: string | null
    activatedAt?: Date | string
    lastSeenAt?: Date | string | null
    deactivatedAt?: Date | string | null
    status?: $Enums.InstallationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    license: LicenseCreateNestedOneWithoutInstallationsInput
  }

  export type InstallationUncheckedCreateWithoutEventsInput = {
    id?: string
    licenseId: string
    machineId: string
    deviceName?: string | null
    operatingSystem?: string | null
    appVersion?: string | null
    activatedAt?: Date | string
    lastSeenAt?: Date | string | null
    deactivatedAt?: Date | string | null
    status?: $Enums.InstallationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InstallationCreateOrConnectWithoutEventsInput = {
    where: InstallationWhereUniqueInput
    create: XOR<InstallationCreateWithoutEventsInput, InstallationUncheckedCreateWithoutEventsInput>
  }

  export type LicenseUpsertWithoutEventsInput = {
    update: XOR<LicenseUpdateWithoutEventsInput, LicenseUncheckedUpdateWithoutEventsInput>
    create: XOR<LicenseCreateWithoutEventsInput, LicenseUncheckedCreateWithoutEventsInput>
    where?: LicenseWhereInput
  }

  export type LicenseUpdateToOneWithWhereWithoutEventsInput = {
    where?: LicenseWhereInput
    data: XOR<LicenseUpdateWithoutEventsInput, LicenseUncheckedUpdateWithoutEventsInput>
  }

  export type LicenseUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    licenseKey?: StringFieldUpdateOperationsInput | string
    type?: EnumLicenseTypeFieldUpdateOperationsInput | $Enums.LicenseType
    status?: EnumLicenseStatusFieldUpdateOperationsInput | $Enums.LicenseStatus
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxInstallations?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutLicensesNestedInput
    product?: ProductUpdateOneRequiredWithoutLicensesNestedInput
    installations?: InstallationUpdateManyWithoutLicenseNestedInput
  }

  export type LicenseUncheckedUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    licenseKey?: StringFieldUpdateOperationsInput | string
    type?: EnumLicenseTypeFieldUpdateOperationsInput | $Enums.LicenseType
    status?: EnumLicenseStatusFieldUpdateOperationsInput | $Enums.LicenseStatus
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxInstallations?: IntFieldUpdateOperationsInput | number
    customerId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    installations?: InstallationUncheckedUpdateManyWithoutLicenseNestedInput
  }

  export type InstallationUpsertWithoutEventsInput = {
    update: XOR<InstallationUpdateWithoutEventsInput, InstallationUncheckedUpdateWithoutEventsInput>
    create: XOR<InstallationCreateWithoutEventsInput, InstallationUncheckedCreateWithoutEventsInput>
    where?: InstallationWhereInput
  }

  export type InstallationUpdateToOneWithWhereWithoutEventsInput = {
    where?: InstallationWhereInput
    data: XOR<InstallationUpdateWithoutEventsInput, InstallationUncheckedUpdateWithoutEventsInput>
  }

  export type InstallationUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    machineId?: StringFieldUpdateOperationsInput | string
    deviceName?: NullableStringFieldUpdateOperationsInput | string | null
    operatingSystem?: NullableStringFieldUpdateOperationsInput | string | null
    appVersion?: NullableStringFieldUpdateOperationsInput | string | null
    activatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deactivatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumInstallationStatusFieldUpdateOperationsInput | $Enums.InstallationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    license?: LicenseUpdateOneRequiredWithoutInstallationsNestedInput
  }

  export type InstallationUncheckedUpdateWithoutEventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    licenseId?: StringFieldUpdateOperationsInput | string
    machineId?: StringFieldUpdateOperationsInput | string
    deviceName?: NullableStringFieldUpdateOperationsInput | string | null
    operatingSystem?: NullableStringFieldUpdateOperationsInput | string | null
    appVersion?: NullableStringFieldUpdateOperationsInput | string | null
    activatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deactivatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumInstallationStatusFieldUpdateOperationsInput | $Enums.InstallationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LicenseCreateManyCustomerInput = {
    id?: string
    licenseKey: string
    type?: $Enums.LicenseType
    status?: $Enums.LicenseStatus
    issuedAt?: Date | string
    expiresAt?: Date | string | null
    maxInstallations?: number
    productId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LicenseUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    licenseKey?: StringFieldUpdateOperationsInput | string
    type?: EnumLicenseTypeFieldUpdateOperationsInput | $Enums.LicenseType
    status?: EnumLicenseStatusFieldUpdateOperationsInput | $Enums.LicenseStatus
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxInstallations?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutLicensesNestedInput
    installations?: InstallationUpdateManyWithoutLicenseNestedInput
    events?: LicenseEventUpdateManyWithoutLicenseNestedInput
  }

  export type LicenseUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    licenseKey?: StringFieldUpdateOperationsInput | string
    type?: EnumLicenseTypeFieldUpdateOperationsInput | $Enums.LicenseType
    status?: EnumLicenseStatusFieldUpdateOperationsInput | $Enums.LicenseStatus
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxInstallations?: IntFieldUpdateOperationsInput | number
    productId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    installations?: InstallationUncheckedUpdateManyWithoutLicenseNestedInput
    events?: LicenseEventUncheckedUpdateManyWithoutLicenseNestedInput
  }

  export type LicenseUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    licenseKey?: StringFieldUpdateOperationsInput | string
    type?: EnumLicenseTypeFieldUpdateOperationsInput | $Enums.LicenseType
    status?: EnumLicenseStatusFieldUpdateOperationsInput | $Enums.LicenseStatus
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxInstallations?: IntFieldUpdateOperationsInput | number
    productId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LicenseCreateManyProductInput = {
    id?: string
    licenseKey: string
    type?: $Enums.LicenseType
    status?: $Enums.LicenseStatus
    issuedAt?: Date | string
    expiresAt?: Date | string | null
    maxInstallations?: number
    customerId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LicenseUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    licenseKey?: StringFieldUpdateOperationsInput | string
    type?: EnumLicenseTypeFieldUpdateOperationsInput | $Enums.LicenseType
    status?: EnumLicenseStatusFieldUpdateOperationsInput | $Enums.LicenseStatus
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxInstallations?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutLicensesNestedInput
    installations?: InstallationUpdateManyWithoutLicenseNestedInput
    events?: LicenseEventUpdateManyWithoutLicenseNestedInput
  }

  export type LicenseUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    licenseKey?: StringFieldUpdateOperationsInput | string
    type?: EnumLicenseTypeFieldUpdateOperationsInput | $Enums.LicenseType
    status?: EnumLicenseStatusFieldUpdateOperationsInput | $Enums.LicenseStatus
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxInstallations?: IntFieldUpdateOperationsInput | number
    customerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    installations?: InstallationUncheckedUpdateManyWithoutLicenseNestedInput
    events?: LicenseEventUncheckedUpdateManyWithoutLicenseNestedInput
  }

  export type LicenseUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    licenseKey?: StringFieldUpdateOperationsInput | string
    type?: EnumLicenseTypeFieldUpdateOperationsInput | $Enums.LicenseType
    status?: EnumLicenseStatusFieldUpdateOperationsInput | $Enums.LicenseStatus
    issuedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxInstallations?: IntFieldUpdateOperationsInput | number
    customerId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InstallationCreateManyLicenseInput = {
    id?: string
    machineId: string
    deviceName?: string | null
    operatingSystem?: string | null
    appVersion?: string | null
    activatedAt?: Date | string
    lastSeenAt?: Date | string | null
    deactivatedAt?: Date | string | null
    status?: $Enums.InstallationStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type LicenseEventCreateManyLicenseInput = {
    id?: string
    installationId?: string | null
    type: $Enums.LicenseEventType
    ipAddress?: string | null
    userAgent?: string | null
    details?: string | null
    createdAt?: Date | string
  }

  export type InstallationUpdateWithoutLicenseInput = {
    id?: StringFieldUpdateOperationsInput | string
    machineId?: StringFieldUpdateOperationsInput | string
    deviceName?: NullableStringFieldUpdateOperationsInput | string | null
    operatingSystem?: NullableStringFieldUpdateOperationsInput | string | null
    appVersion?: NullableStringFieldUpdateOperationsInput | string | null
    activatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deactivatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumInstallationStatusFieldUpdateOperationsInput | $Enums.InstallationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: LicenseEventUpdateManyWithoutInstallationNestedInput
  }

  export type InstallationUncheckedUpdateWithoutLicenseInput = {
    id?: StringFieldUpdateOperationsInput | string
    machineId?: StringFieldUpdateOperationsInput | string
    deviceName?: NullableStringFieldUpdateOperationsInput | string | null
    operatingSystem?: NullableStringFieldUpdateOperationsInput | string | null
    appVersion?: NullableStringFieldUpdateOperationsInput | string | null
    activatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deactivatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumInstallationStatusFieldUpdateOperationsInput | $Enums.InstallationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    events?: LicenseEventUncheckedUpdateManyWithoutInstallationNestedInput
  }

  export type InstallationUncheckedUpdateManyWithoutLicenseInput = {
    id?: StringFieldUpdateOperationsInput | string
    machineId?: StringFieldUpdateOperationsInput | string
    deviceName?: NullableStringFieldUpdateOperationsInput | string | null
    operatingSystem?: NullableStringFieldUpdateOperationsInput | string | null
    appVersion?: NullableStringFieldUpdateOperationsInput | string | null
    activatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lastSeenAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deactivatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    status?: EnumInstallationStatusFieldUpdateOperationsInput | $Enums.InstallationStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LicenseEventUpdateWithoutLicenseInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumLicenseEventTypeFieldUpdateOperationsInput | $Enums.LicenseEventType
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    installation?: InstallationUpdateOneWithoutEventsNestedInput
  }

  export type LicenseEventUncheckedUpdateWithoutLicenseInput = {
    id?: StringFieldUpdateOperationsInput | string
    installationId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumLicenseEventTypeFieldUpdateOperationsInput | $Enums.LicenseEventType
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LicenseEventUncheckedUpdateManyWithoutLicenseInput = {
    id?: StringFieldUpdateOperationsInput | string
    installationId?: NullableStringFieldUpdateOperationsInput | string | null
    type?: EnumLicenseEventTypeFieldUpdateOperationsInput | $Enums.LicenseEventType
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LicenseEventCreateManyInstallationInput = {
    id?: string
    licenseId: string
    type: $Enums.LicenseEventType
    ipAddress?: string | null
    userAgent?: string | null
    details?: string | null
    createdAt?: Date | string
  }

  export type LicenseEventUpdateWithoutInstallationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumLicenseEventTypeFieldUpdateOperationsInput | $Enums.LicenseEventType
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    license?: LicenseUpdateOneRequiredWithoutEventsNestedInput
  }

  export type LicenseEventUncheckedUpdateWithoutInstallationInput = {
    id?: StringFieldUpdateOperationsInput | string
    licenseId?: StringFieldUpdateOperationsInput | string
    type?: EnumLicenseEventTypeFieldUpdateOperationsInput | $Enums.LicenseEventType
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type LicenseEventUncheckedUpdateManyWithoutInstallationInput = {
    id?: StringFieldUpdateOperationsInput | string
    licenseId?: StringFieldUpdateOperationsInput | string
    type?: EnumLicenseEventTypeFieldUpdateOperationsInput | $Enums.LicenseEventType
    ipAddress?: NullableStringFieldUpdateOperationsInput | string | null
    userAgent?: NullableStringFieldUpdateOperationsInput | string | null
    details?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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