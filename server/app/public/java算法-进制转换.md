---
title: java算法--进制转换
date: 2020-01-19 17:52:49
author: wyqvong
keywords: 算法
categories: 算法
tags:
    - java
    - 算法
---
进制转换原理
    十进制 转 二进制：

    原理: 对十进制数进行除 2 运算取余。
      6 --> 110

  二进制 转 十进制
 原理: 二进制 乘以 2 的n次幂 的过程

      110 ->0*2的0次幂 + 1*2的1次幂+ 1 * 2的2次幂
                 0   +        2   +    4=6
    --------------------------------------------------
      0  0 1  1  0 1 0 1
    128 64 32 16 8 4 2 1  = 53

 当 8个bit 都是 1  最大是 255 那么一个字节最大就是 255
 

 负数的二进制：

 其实就是 十进制数 转换成 二进制数后 取反+1

    以-6为例，一个整数类型 是 4个字节 1 int = 4 byte = 32 bit

     0000-0000  0000-0000  0000-0000  0000-0110

     1111-1111  1111-1111  1111-1111  1111-1001 取反

  + 0000-0000  0000-0000  0000-0000  0000-0001  +1

       --------------------------------------------------

     1111-1111  1111-1111  1111-1111  1111-1010  = -6

 

 二进制 转 十六进制

    先将十进制 转成 二进制 --> 十六进制

    四个二进制位 就是 一个 十六进制位

         1111 最大值是 8+4+2+1 = 15 逢16进1

        以  90为例：

         0101-1010

           ----   ----

           5        A        90 十六进制表示为 0x5A

 二进制 转 八进制

    三个二进制位 就是一个 八进制位

          111 = 4+2+1 = 7 逢8进1

    前面位数不够 拿0补

         001-011-010
         --- --- ---
          1   3   2   = 0132



```java
/*
  该类用于进制转换
*/
public class Main{
    public static void main(String[] args){
    	Scanner sc = new Scanner(System.in);
    	int a = sc.nextInt();
        System.out.println(Integer.toBinaryString(a));//十进制转换成二进制
        System.out.println(Integer.toHexString(a));//十进制转换成十六进制
        System.out.println(Integer.toOctalString(a));//十进制转换成8进制
        System.out.println(Integer.toString(a,16));//十进制转换成对应进制数，不适合用于负数，第一个参数为转换数，第二个参数为转换进制
        
        System.out.println(Integer.parseInt("1010",2));//N进制转换成十进制，返回类型为int,第一个参数为字符串，第二个参数为进制
        System.out.println(Integer.parseInt("1010",8));
        System.out.println(Integer.parseInt("1010",16));
        
        
        System.out.println(Integer.valueOf("1010",2));//N进制转换成十进制，返回类型为int,第一个参数为字符串，第二个参数为进制
        System.out.println(Integer.parseInt("1010",8));
        System.out.println(Integer.parseInt("1010",16));
    }
}
```

```java
引入负数测试代码：
	System.out.println(Integer.toString(10,2));//十进制转换成对应进制数，不适合用于负数
	System.out.println(Integer.toString(-10,2));
	System.out.println(Integer.toString(10,8));//第一个参数为转换数，第二个参数为转换进制
	System.out.println(Integer.toString(-10,8));
	System.out.println(Integer.toString(10,16));
	System.out.println(Integer.toString(-10,16));
```


```java
package jzzh;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class Main3 {
	public static void main(String[] args) throws IOException{
		BufferedReader input = new BufferedReader(new InputStreamReader(System.in));
		int n = Integer.parseInt(input.readLine());
		for(int ii=0;ii<n;++ii){
			char[] s1 = input.readLine().toCharArray();
			StringBuilder s2 = new StringBuilder();
			for(int i=0;i<s1.length;++i)
				switch (s1[i]) {
				case '0':s2.append("0000");break;
	            case '1':s2.append("0001");break;
	            case '2':s2.append("0010");break;
	            case '3':s2.append("0011");break;
	            case '4':s2.append("0100");break;
	            case '5':s2.append("0101");break;
	            case '6':s2.append("0110");break;
	            case '7':s2.append("0111");break;
	            case '8':s2.append("1000");break;
	            case '9':s2.append("1001");break;
	            case 'A':s2.append("1010");break;
	            case 'B':s2.append("1011");break;
	            case 'C':s2.append("1100");break;
	            case 'D':s2.append("1101");break;
	            case 'E':s2.append("1110");break;
	            case 'F':s2.append("1111");break;
				}
			while (s2.length()%3!=0)
				s2.insert(0, "0");
			s1=s2.toString().toCharArray();
			int i = 0;
			while(i<s1.length&&(s1[i]-'0')*4+(s1[i+1]-'0')*2+(s1[i+2]-'0')==0)//-'0'的目的是为了把字符串变成数字类型
				i+=3;
			if(i==s1.length)
				System.out.println("0");
			else
				for(;i<s1.length;i+=3)
					System.out.print((s1[i]-'0')*4+(s1[i+1]-'0')*2+(s1[i+2]-'0'));
			System.out.println();
		}
	}
}
```
