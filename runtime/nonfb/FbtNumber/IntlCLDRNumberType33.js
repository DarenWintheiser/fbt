/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @generated SignedSource<<2f12862a6c5cbca23561dea8a26b9bcf>>
 *
 * Generated by LanguageCLDRGenScript
 * @codegen-command: flib/intern/scripts/intl/cldr/gencode_all_plurals.sh
 *
 * @flow strict
 * @oncall i18n_fbt_oss
 */

'use strict';

const IntlVariations = require('IntlVariations');

const IntlCLDRNumberType33 = {
  getVariation(n: number): $Values<typeof IntlVariations> {
    if (n % 10 === 1) {
      return IntlVariations.NUMBER_ONE;
    } else if (n % 10 === 2) {
      return IntlVariations.NUMBER_TWO;
    } else if ((n % 100 === 0 || n % 100 === 20 || n % 100 === 40 || n % 100 === 60 || n % 100 === 80)) {
      return IntlVariations.NUMBER_FEW;
    } else {
      return IntlVariations.NUMBER_OTHER;
    }
  }
};

module.exports = IntlCLDRNumberType33;
