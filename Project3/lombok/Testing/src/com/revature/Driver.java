package com.revature;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Driver {
	public static void main(String[] args) {
		
		int[] a = {2,4,7};
		String[] array = {"2", "4", "7"};
		
		for (int str: a) {
			System.out.println(str);
		}
		
//		List<String> array1 = new ArrayList<String>();
//		array1 = Arrays.asList(array);
//		System.out.println(array1);
		
		List<String> array1 = Arrays.asList(array);
 		
		array1.stream().forEach(box -> System.out.println(box));
		
	}
	
}
