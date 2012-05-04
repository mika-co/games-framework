/**
 * Copyright 2012 Google Inc. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Utilities and constants shared by the entire GF library.
 *
 * @author benvanik@google.com (Ben Vanik)
 */

goog.provide('gf');


/**
 * @define {boolean} True if the runtime is being compiled in server mode.
 * This will exclude all types and features that are not supported on servers
 * (or workers), such as audio/input/etc.
 */
gf.SERVER = false;


/**
 * @define {boolean} True if running under node. Guard all node code with this
 * define to ensure it does not leak into client/worker code.
 */
gf.NODE = false;


/**
 * @define {string} The compilation mode of the current runtime, either
 * 'debug', 'compiled', or 'optimized'.
 */
gf.SOURCE_MODE = 'debug';


/**
 * @define {string} Relative path from where the code is executing to where the
 * bin/ folder can be found.
 * Resource paths generated by the content pipeline will use this as their base
 * path.
 */
gf.BIN_PATH = '/';


/**
 * @define {boolean} Whether the build client/server communication channel is
 * supported.
 * Release builds should set this to false.
 */
gf.BUILD_CLIENT = true;