using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApplication1
{
    class Pyramid
    {
        static void Main()
        {
            for (int i = 1; i <= 5; i++)
            {
                for (int j = 5; j > i ; j--)
                {
                    Console.Write(" ");
                    
                }
                Console.Write("*");
                for (int k = 1; k < i*2-1; k++)
                {
                    if (i == 1)
                        break;
                    Console.Write("*");
                }
                Console.WriteLine();
            }
            Console.ReadLine();

         //   output
         //       *
         //      ***
         //    *****
         //  *******
         //*********
        }
    }
}
