#!/bin/sh -l

#install package from var name

sh -c "export jdkver=$INPUT_variable_name"
sh -c "echo $jdkver"
