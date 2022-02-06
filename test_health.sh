#!/bin/bash
checkPort() {
	# test service health
	# http_code with 3 status：000=TIME OUT，200=NOMAL，OTHERS=ERROR
	# return code: 0=TIME OUT，1=OK，2=NG
	url="http://127.0.0.1:"$1"/"	
	echo "connecting \t->\t$url"
	http_code=`curl -Is -m 10 -w %{http_code} -o /dev/null $url`

	if [ $http_code -eq 0 ];then
		# 0=TIME OUT
		echo	"http_code\t->\t$http_code"
		echo 	"[WARNING]t->\tTIME OUT"
		return	0
	elif [ $http_code -eq 200 ];then
		echo "http_code\t->\t$http_code"
		echo "[INFO]\t->\tOK"
		# 1=200 OK
		return 1
	else
		# 2=ERROR http_code != 200
		echo "http_code\t->\t$http_code"
		echo 	"[ERROR]\t->\tERROR"
		return 2
	fi 
}

checkPort 80
echo $
