/**
* Author: CZ cz.devnet@gmail.com
 */

package main

import (
	"flag"
	"fmt"
)

func main() {
	if Flag.Version {
		fmt.Printf("Version:%s \n", Version())
		return
	}

	if Flag.SourceFile == "" || Flag.DestFile == "" {
		flag.Usage()
		return
	}

}
