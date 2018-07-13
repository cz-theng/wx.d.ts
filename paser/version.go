/**
* Author: CZ (cz.devnet@gmail.com)
*
* Description:
 */

package main

import (
	"fmt"
)

const (
	major = 0
	minor = 1
	patch = 0
)

// Version return parse's version
func Version() string {
	return fmt.Sprintf("parse[%d.%d.%d]", major, minor, patch)
}
