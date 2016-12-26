using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApplication1
{
    class Patern3
    {
        static void Main()
        {
            int k = 1;
            for (int i =1 ; i<=6; i++)
            {
                for (int j = k; j <= 6; j++)
                {
                    Console.Write(j);
                }
                k++;
                Console.WriteLine();
            }
            Console.ReadLine();
            //output
            //    123456
                   //23456
                   //3456
                   //456
                   //56
                   //6
        }
    }
}
